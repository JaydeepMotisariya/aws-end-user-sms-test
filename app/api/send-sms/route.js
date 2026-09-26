import {
  PinpointSMSVoiceV2Client,
  SendTextMessageCommand,
} from "@aws-sdk/client-pinpoint-sms-voice-v2";
import { NextResponse } from "next/server";

function errorResponse(error, status) {
  return NextResponse.json({ success: false, error }, { status });
}

function cleanAwsError(error) {
  const raw =
    error && typeof error.message === "string" && error.message.trim()
      ? error.message.trim()
      : "Failed to send SMS.";

  const originationNumber = process.env.AWS_SMS_ORIGINATION_NUMBER;
  if (!originationNumber) {
    return raw;
  }

  return raw.split(originationNumber).join("[configured origination number]");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return errorResponse("Invalid request body.", 400);
  }

  const phoneNumber =
    body && typeof body.phoneNumber === "string" ? body.phoneNumber.trim() : "";
  const message =
    body && typeof body.message === "string" ? body.message.trim() : "";

  if (!phoneNumber) {
    return errorResponse("Phone number is required.", 400);
  }

  if (!phoneNumber.startsWith("+")) {
    return errorResponse("Phone number must start with +.", 400);
  }

  if (!message) {
    return errorResponse("Message is required.", 400);
  }

  const region = process.env.AWS_REGION;
  const originationNumber = process.env.AWS_SMS_ORIGINATION_NUMBER;

  if (!region) {
    return errorResponse("AWS_REGION is not configured.", 500);
  }

  if (!originationNumber) {
    return errorResponse("AWS_SMS_ORIGINATION_NUMBER is not configured.", 500);
  }

  try {
    const client = new PinpointSMSVoiceV2Client({ region });
    const response = await client.send(
      new SendTextMessageCommand({
        DestinationPhoneNumber: phoneNumber,
        OriginationIdentity: originationNumber,
        MessageBody: message,
        MessageType: "TRANSACTIONAL",
      })
    );

    return NextResponse.json({
      success: true,
      messageId: response.MessageId,
    });
  } catch (error) {
    console.error(error);
    return errorResponse(cleanAwsError(error), 500);
  }
}
