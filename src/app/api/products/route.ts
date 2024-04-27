import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(req: NextRequest) {
  const prodect = await stripe.products.list();
  return NextResponse.json(prodect.data.reverse());
}
