using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Extentions;
using Api.Models;
using Api.Models.Candidate;
using Api.Persistence.Dtos;
using Api.Persistence.Repositories.IRepository;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    public class CandidateController : BaseApiController
    {

       
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        public CandidateController(IUnitOfWork unitOfWork, UserManager<AppUser> userManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _mapper = mapper;
        }




        [HttpPost("CreateCandidateProfile")]
        public ActionResult<CandidatProfileDto> CreateCandidateProfile(CandidatProfileDto candidatProfileDto)
        {

            if (candidatProfileDto == null)
                return StatusCode(StatusCodes.Status404NotFound, new { Status = 404, Message = "Please Enter Full Data" });

            _unitOfWork.CandidateProfile.Add(_mapper.Map<CandidatProfileDto, CandidateProfile>(candidatProfileDto));

          
            _unitOfWork.Complete();
            return candidatProfileDto;
        }



        [HttpPut("UpdateCandidateProfile")]
        public ActionResult<CandidatProfileDto> UpdateCandidateProfile(CandidatProfileDto candidatProfileDto)
        {
            try
            {
                if (candidatProfileDto == null)
                    return StatusCode(StatusCodes.Status404NotFound, new { Status = 404, Message = "Please Enter Full Data" });

                _unitOfWork.CandidateProfile.Update(_mapper.Map<CandidatProfileDto, CandidateProfile>(candidatProfileDto));

                var allCompanyIndustries = _unitOfWork.CandidatePhonNumber
                    .GetAll(x => x.CandidateProfileId == candidatProfileDto.Id);

              
                _unitOfWork.Complete();
                return candidatProfileDto;
            }
            catch (Exception e)
            {

                throw new Exception(e.InnerException.Message);
            }

        }



        [HttpDelete("DeleteCandidateProfile")]
        public IActionResult DeleteCandidateProfile(int id)
        {

            _unitOfWork.CandidateProfile.Remove(id);
            _unitOfWork.Complete();

            return Ok(new { message = "Deleted Success" });
        }


      
        [HttpGet("getAllCandidateProfiles")]
        public IActionResult GetAllCandidateProfiles()
        {


            var CandidateProfiles = _unitOfWork.CandidateProfile.GetAll();
            

            return Ok(CandidateProfiles);
        }

    }
}
