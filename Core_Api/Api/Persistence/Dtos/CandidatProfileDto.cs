using Api.Models.Candidate;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Persistence.Dtos
{
    public class CandidatProfileDto
    {

        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }


        [Required]
        public string MiddleName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string EducationLevel { get; set; }


    }
}
