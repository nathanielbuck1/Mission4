using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controlers
{
    public class BlahController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        //overloading
        [HttpGet]
        public IActionResult Calc ()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Calc(CalcModel model)
        {
            return View();
        }
    }
}
