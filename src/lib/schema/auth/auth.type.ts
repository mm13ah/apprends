import { Field, InputType, ObjectType } from 'type-graphql';

@ObjectType()
export class Auth {
  @Field({ nullable: true })
  access_token?: string;

  @Field({ nullable: true })
  refresh_token?: string;
}

@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
