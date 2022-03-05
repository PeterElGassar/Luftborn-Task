using Api.Models.BasicModels;
using Api.Models.Candidate;
using Api.Persistence.Dtos;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Helpers
{
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {
            CreateMap<CandidateProfile, CandidatProfileDto>();
            


            //Candidate Profile
            CreateMap<ProfileCandidatePhonNumber, ProfileCandidatePhonNumbersDto>();

            CreateMap<ProfileCandidatePhonNumbersDto, ProfileCandidatePhonNumber>();
            CreateMap<CandidatProfileDto, CandidateProfile>();  

        }
    }
}
