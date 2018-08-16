'use strict';
var mongoose = require('mongoose');
var JobInfo = mongoose.model('JobInfo');

exports.processRequest = function(req, res) {
//return res.json(req.body);
if (req.body.queryResult.action == "location") {
    getJobInfo(req,res)
  }
};

function getJobInfo(req,res)
{
let zipcodeToSearch = req.body.queryResult && req.body.queryResult.parameters && req.body.queryResult.parameters.zipcode ? req.body.result.parameters.zipcode : 'Unknown';
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
