using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Api.Migrations
{
    public partial class updatecandidateTbl : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CandidateProfiles_AspNetUsers_AppUserId",
                table: "CandidateProfiles");

            migrationBuilder.DropIndex(
                name: "IX_CandidateProfiles_AppUserId",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "City",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "CvPath",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "EducationLevel",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "Nationalty",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "ProfileImgPath",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "Street",
                table: "CandidateProfiles");

            migrationBuilder.DropColumn(
                name: "ZipCode",
                table: "CandidateProfiles");

            migrationBuilder.AddColumn<int>(
                name: "CandidateProfileId",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUsers_CandidateProfileId",
                table: "AspNetUsers",
                column: "CandidateProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_AspNetUsers_CandidateProfiles_CandidateProfileId",
                table: "AspNetUsers",
                column: "CandidateProfileId",
                principalTable: "CandidateProfiles",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AspNetUsers_CandidateProfiles_CandidateProfileId",
                table: "AspNetUsers");

            migrationBuilder.DropIndex(
                name: "IX_AspNetUsers_CandidateProfileId",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "CandidateProfileId",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "AppUserId",
                table: "CandidateProfiles",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CvPath",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "CandidateProfiles",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EducationLevel",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "CandidateProfiles",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Nationalty",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ProfileImgPath",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Street",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ZipCode",
                table: "CandidateProfiles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CandidateProfiles_AppUserId",
                table: "CandidateProfiles",
                column: "AppUserId",
                unique: true,
                filter: "[AppUserId] IS NOT NULL");

            migrationBuilder.AddForeignKey(
                name: "FK_CandidateProfiles_AspNetUsers_AppUserId",
                table: "CandidateProfiles",
                column: "AppUserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
