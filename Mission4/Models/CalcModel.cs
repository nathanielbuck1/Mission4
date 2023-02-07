using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class CalcModel
    {

        //Setters and getters
        [Range(0, maximum: 100)]
        public string Assighn { get; set; }
        [Range(0, maximum: 100)]
        public string GP { get; set; }
        [Range(0, maximum: 100)]
        public string QZ { get; set; }
        [Range(0, maximum: 100)]
        public string Mid { get; set; }
        [Range(0, maximum: 100)]
        public string Final { get; set; }
        [Range(0, maximum: 100)]
        public string Intex { get; set; }


    }
}
