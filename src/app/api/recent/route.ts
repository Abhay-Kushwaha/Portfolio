import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "recent.json");

function readRecent() {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeRecent(data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export async function GET() {
    const data = readRecent();
    return NextResponse.json(data);
}

export async function POST(req: Request) {
    const body = await req.json();
    const { name, path: pagePath } = body;

    let recent = readRecent().filter((item: any) => item.path !== pagePath);
    recent.unshift({ name, path: pagePath });

    if (recent.length > 5) recent = recent.slice(0, 5);

    writeRecent(recent);
    return NextResponse.json({ success: true });
}
