using Api.Models.BasicModels;
using Api.Models.Candidate;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Context: IdentityDbContext<AppUser>
    {
        public Context(DbContextOptions<Context> opt):base(opt)
        {

        }

        public DbSet<CandidateProfile> CandidateProfiles { get; set; }
        public DbSet<ProfileCandidatePhonNumber> ProfileCandidatePhonNumbers { get; set; }

       


        public DbSet<AppUser> AppUsers { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            
        }



    }
}
