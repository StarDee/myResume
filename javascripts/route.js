/**
 * 
 * @authors Your starDee (di.star@foxmail.com)
 * @date    2016-11-22 00:17:52
 * @version $Id$
 */
app.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
	var _lazyLoad = function(loaded) {
		return function($ocLazyLoad) {
			return $ocLazyLoad.load(loaded, {serie:true});
		}
	};

	$ocLazyLoadProvider.config({
		debug: false,
		events: true
	});

	//$locationProvider.html5Mode(true);
	

	$urlRouterProvider.otherwise('/information');
	$stateProvider
		.state('app', {
			url: '',
			templateUrl: 'views/main.html',
			controller: 'mainCtrl',
			controllerAs: 'vm',
			abstract: true,
			resolve: {
				loadMyFile: _lazyLoad([
					'javascripts/controllers/mainCtrl.js',
					'stylesheets/main.css',

				])
			}
		})
		.state('app.information', {
			url: '/information',
			title: '狄星-简历',
			templateUrl: 'views/information.html',
			controller: 'informationCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'javascripts/controllers/information.js',
                    'stylesheets/information.css',
					'javascripts/directives/d3map/d3map.js',
					'javascripts/directives/d3map/d3map.css'
                ])
            }
		})

		.state('app.edu', {
			url: '/edu',
			title: '教育经历',
			templateUrl: 'views/edu.html',
			controller: 'eduCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'javascripts/controllers/eduCtrl.js',
                    'stylesheets/edu.css'
                ])
            }
		})
		.state('app.job', {
			url: '/job',
			title: '工作经历',
			templateUrl: 'views/job.html',
            //controller: 'jobCtrl',
            //controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    //'javascripts/controllers/jobCtrl.js',
                    'stylesheets/job.css'
                ])
            }
		})
		.state('app.skill', {
			url: '/skill',
			title: '职业技能',
			templateUrl: 'views/skill.html',
			controller: 'skillCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'javascripts/controllers/skillCtrl.js',
                    'stylesheets/skill.css',
					'javascripts/directives/d3data/d3data.js',
					'javascripts/directives/d3data/d3data.css'
                ])
            }
		})
});