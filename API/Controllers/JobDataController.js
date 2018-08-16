'use strict';
var mongoose = require('mongoose');
var JobInfo = mongoose.model('JobInfo');

exports.processRequest = function(req, res) {
if (req.body.result.action == "location") {
    getJobInfo(req,res)
  }
};

function getJobInfo(req,res)
{
let zipcodeToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.zipcode ? req.body.result.parameters.zipcode : 'Unknown';
JobInfo.findOne({job:jobToSearch},function(err,jobExists)
      {
        if (err)
        {
          return res.json({
              speech: 'Something went wrong!',
              displayText: 'Something went wrong!',
              source: 'team info'
          });
        }
if (jobExists)
        {
          return res.json({
                speech: jobExists.type,
                displayText: jobExists.type,
                source: 'job info'
            });
        }
        else {
          return res.json({
                speech: 'Currently I am not having any jobs for this zipcode',
                displayText: 'Currently I am not having any jobs for this zipcode',
                source: 'job info'
            });
        }
      });
}
