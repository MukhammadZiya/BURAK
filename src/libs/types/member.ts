import { ObjectId } from "mongoose";
import { Session } from "express-session";
import { Request } from "express";
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberImage?: string;
  memberPoints?: number;
  memberAddress?: string;
  memberDesc?: string;
}

export interface Member {
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberImage?: string;
  memberPoints: number;
  memberAddress?: string;
  memberDesc?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
  file: Express.Multer.File;
  files: Express.Multer.File[];
}
