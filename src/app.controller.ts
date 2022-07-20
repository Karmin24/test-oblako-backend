import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("/projects")
  getUsers() {
    let mass = {
      message: "ok",
    };
    const json = JSON.stringify(mass);
    console.log(typeof json);
    return json;
  }
  @Get("/")
  onMainPage() {
    return JSON.stringify({ hello: "Hello" });
  }
}
