import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Messege } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObjectId } from "../libs/config";

class MemberService {
  getUsers() {
    throw new Error("Method not implemented.");
  }
  updateChosenUser(body: any) {
    throw new Error("Method not implemented.");
  }
  // updateChosenUser(body: any) {
  //   throw new Error("Method not implemented.");
  // }
  // getUsers() {
  //   throw new Error("Method not implemented.");
  // }
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }

  /** SPA   */

  public async signup(input: MemberInput): Promise<Member> {
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result.toJSON();
    } catch (err) {
      console.log("Error, model:signup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Messege.USED_NICK_PHONE);
    }
  }

  public async login(input: LoginInput): Promise<Member> {
    //TODOs consider member status later
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Messege.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    // const isMatch = input.memberPassword === member.memberPassword;
    // console.log("isMatch:", isMatch);

    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORIZED, Messege.WRONG_PASSWORD);

    return await this.memberModel.findById(member._id).lean().exec();
  }

  // public async getUsers(): Promise<Member[]> {
  //   const result = await this.memberModel
  //     .find({ memberType: MemberType.USER })
  //     .exec();
  //   if (!result) throw new Errors(HttpCode.NOT_FOUND, Messege.NO_DATA_FOUND);

  //   return result;
  // }

  // public async updateChosenUser(body: any): Promise<Member[]> {
  //   input._id = shapeIntoMongooseObjectId(input._id);

  //   const result = await this.memberModel
  //     .findByIdAndUpdate({ _id: input._id }, input, { new: true })
  //     .exec();

  //   if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Messege.UPDATE_FAILED);

  //   return result;
  // }

  /** SSR   */

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();

    console.log("exists:", exist);

    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Messege.CREATE_FAILED);

    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);

    try {
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Messege.CREATE_FAILED);
    }
  }

  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 }
      )
      .exec();

    if (!member) throw new Errors(HttpCode.NOT_FOUND, Messege.NO_MEMBER_NICK);

    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword
    );

    // const isMatch = input.memberPassword === member.memberPassword;
    // console.log("isMatch:", isMatch);

    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORIZED, Messege.WRONG_PASSWORD);

    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;
