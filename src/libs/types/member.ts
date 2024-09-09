import { MemberStatus, MemberType } from "../enums/member.enum";

export interface MemberInput {
  memberType?: MemberType;
  memberStatus? : MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword : string;
  memberImage? : string;
  memberPoints? : number;
  memberAddress? : string;
  memberDesc? : string;
}

export interface Member {
  memberType: MemberType;
  memberStatus : MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword? : string;
  memberImage? : string;
  memberPoints : number;
  memberAddress? : string;
  memberDesc? : string;
  createdAt : Date;
  updatedAt : Date;
}