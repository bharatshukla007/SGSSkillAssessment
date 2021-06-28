import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'surveyjs-component',
  template: `
    <div id="surveyContainer"></div>
  `
})
export class SurveyjsComponent {
  ngOnInit() {
    var json = {
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'text',
              name: 'question1',
              title: 'Employee ID',
              isRequired: true,
              validators: [{ type: 'numeric' }],
              size: 0
            },
            {
              type: 'dropdown',
              name: 'question2',
              title: 'Grade',
              isRequired: true,
              choices: [
                { value: 'item1', text: '3.1' },
                { value: 'item2', text: '3.2' },
                { value: 'item3', text: '3.3' },
                { value: 'item4', text: '5.1' },
                { value: 'item5', text: '5.2' },
                { value: 'item6', text: '5.3' },
                { value: 'item7', text: '7.1' },
                { value: 'item8', text: '7.2' },
                { value: 'item9', text: '7.3' },
                { value: 'item10', text: '9.1' },
                { value: 'item11', text: '9.2' },
                { value: 'item12', text: '9.3' }
              ]
            },
            {
              type: 'dropdown',
              name: 'question3',
              title: 'Technology',
              isRequired: true,
              choices: [
                { value: 'item1', text: 'JAVA' },
                { value: 'item2', text: 'C# .NET' },
                { value: 'item3', text: 'Automation' },
                { value: 'item4', text: 'Cloud' },
                { value: 'item5', text: 'DevOps' }
              ]
            }
          ]
        },
        {
          name: 'page2',
          elements: [
            {
              type: 'rating',
              name: 'question4',
              useDisplayValuesInTitle: false,
              title: 'Java 8 - Lambda Expressions, Stream API',
              descriptionLocation: 'underTitle',
              isRequired: true,
              rateValues: [
                { value: 2, text: '1' },
                { value: '3', text: '2' },
                { value: '4', text: '3' },
                { value: '5', text: '4' },
                { value: '6', text: '5' },
                { value: '7', text: '6' },
                { value: '8', text: '7' },
                { value: '9', text: '8' },
                { value: '10', text: '9' },
                { value: '11', text: '10' }
              ],
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question5',
              title: 'SpringBoot - RestAPI, Spring Data, Security...',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question6',
              title: 'Microservices - Design patterns, tools, security',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question7',
              title: 'Messaging Q - KAFKA',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question8',
              title: 'Messaging Q - RabbitMQ',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question9',
              title:
                'Relational Database MySQL  – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question10',
              title:
                'Relational Database Oracle – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question11',
              title:
                'Relational Database PostgreSQL – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question12',
              title: 'NoSQL – MongoDB',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question13',
              title: 'NoSQL – Cassandra',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question14',
              title: 'Cloud - AWS',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question15',
              title: 'Cloud - Azure',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question16',
              title: 'Cloud - GCP',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question17',
              title: 'Docker',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question18',
              title: 'Kubernetes',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question19',
              title: 'ELK - ElasticSearch_LogStash_Kibana',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question20',
              title: 'Redis',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question21',
              title: 'Consul',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question22',
              title: 'Nginx',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question23',
              title: 'Git/Gitlab/Github',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question24',
              title: 'BitBucket',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question25',
              title: 'TDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question26',
              title: 'BDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question27',
              title: 'Agile Methodology',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question28',
              title: 'JIRA, Confluence',
              isRequired: true,
              rateMax: 10
            }
          ],
          visibleIf: "{question3} = 'item1'",
          title: 'JAVA'
        },
        {
          name: 'page3',
          elements: [
            {
              type: 'rating',
              name: 'question86',
              title: '.NET Core',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question87',
              title: 'nUnit',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question88',
              title: 'Azure DevOps',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question89',
              title: 'Microservices - Design patterns, tools, security',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question90',
              title: 'Messaging Q - KAFKA',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question91',
              title: 'Messaging Q - RabbitMQ',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question92',
              title:
                'Relational Database MySQL  – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question93',
              title:
                'Relational Database Oracle – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question94',
              title:
                'Relational Database PostgreSQL – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question95',
              title: 'NoSQL – MongoDB',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question96',
              title: 'NoSQL – Cassandra',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question97',
              title: 'Cloud - AWS',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question98',
              title: 'Cloud - Azure',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question99',
              title: 'Cloud - GCP',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question100',
              title: 'Docker',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question101',
              title: 'Kubernetes',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question102',
              title: 'ELK - ElasticSearch_LogStash_Kibana',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question103',
              title: 'Redis',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question104',
              title: 'Consul',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question105',
              title: 'Nginx',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question106',
              title: 'Git/Gitlab/Github',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question107',
              title: 'BitBucket',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question108',
              title: 'TDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question109',
              title: 'BDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question110',
              title: 'Agile Methodology',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question111',
              title: 'JIRA, Confluence',
              isRequired: true,
              rateMax: 10
            }
          ],
          visibleIf: "{question3} = 'item2'",
          title: 'C# .NET'
        },
        {
          name: 'page4',
          elements: [
            {
              type: 'rating',
              name: 'question29',
              title: 'Selenium',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question30',
              title: 'Basic knowledge on HTTP',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question31',
              title: 'Postman - Swagger',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question32',
              title: 'SQL',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question55',
              title: 'BrowserStack',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question56',
              title: 'Perfecto',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question57',
              title: 'Saucelabs',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question58',
              title: 'WireMock',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question59',
              title: 'Microservices - Design patterns, tools, securityn59',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question33',
              title: 'Messaging Q - KAFKA',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question34',
              title: 'Messaging Q - RabbitMQ',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question35',
              title:
                'Relational Database MySQL  – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question36',
              title:
                'Relational Database Oracle – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question37',
              title:
                'Relational Database PostgreSQL – Entity design, Relationship, SQL programming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question38',
              title: 'NoSQL – MongoDB',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question39',
              title: 'NoSQL – Cassandra',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question40',
              title: 'Cloud - AWS',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question41',
              title: 'Cloud - Azure',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question42',
              title: 'Cloud - GCP',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question43',
              title: 'Docker',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question44',
              title: 'Kubernetes',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question45',
              title: 'ELK - ElasticSearch_LogStash_Kibana',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question46',
              title: 'Redis',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question47',
              title: 'Consul',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question48',
              title: 'Nginx',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question49',
              title: 'Git/Gitlab/Github',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question50',
              title: 'BitBucket',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question51',
              title: 'TDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question52',
              title: 'BDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question53',
              title: 'Agile Methodology',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question54',
              title: 'JIRA, Confluence',
              isRequired: true,
              rateMax: 10
            }
          ],
          visibleIf: "{question3} = 'item3'",
          title: 'Automation'
        },
        {
          name: 'page5',
          elements: [
            {
              type: 'rating',
              name: 'question60',
              title:
                'Cloud peripheral - DNS, Load Balancer, Content Delivery Network, NAT, API Gateway',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question61',
              title: 'App Runtime - Compute node',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question62',
              title: 'Container - Image, Orchestration, Registry',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question63',
              title:
                'Data - Storage, Queue Systems, Database, email, search engine, data streaming',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question64',
              title: 'Security',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question65',
              title: 'OpenStack',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question66',
              title: 'Linux/UNIX',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question67',
              title: 'Rackspace',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question68',
              title:
                'DevOps - Automated deployment, continuous build, monitoring',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question69',
              title: 'Git/Gitlab/Github',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question112',
              title: 'BitBucket',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question113',
              title: 'TDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question114',
              title: 'BDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question115',
              title: 'Agile Methodology',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question116',
              title: 'JIRA, Confluence',
              isRequired: true,
              rateMax: 10
            }
          ],
          visibleIf: "{question3} = 'item4'",
          title: 'Cloud'
        },
        {
          name: 'page6',
          elements: [
            {
              type: 'rating',
              name: 'question70',
              title: 'Unix/Linux',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question71',
              title: 'Bash Shell scripting , Python',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question72',
              title: 'Artifactory',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question73',
              title: 'Nexus',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question74',
              title:
                'Docker (APP and API packaging) and Kubernetes –  components of K8 with its architecture (scheduler and orchestrator and run time of container loads)',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question75',
              title: 'Jenkins',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question76',
              title: 'Terraform',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question77',
              title: 'Ansible',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question78',
              title: 'Chef',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question85',
              title: 'Salt Stack',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question117',
              title: 'IAAS - AWS',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question118',
              title: 'IAAS - Azure',
              isRequired: true,
              rateMax: 11
            },
            {
              type: 'rating',
              name: 'question119',
              title: 'IAAS - GCP',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question120',
              title: 'Prometheus',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question121',
              title: 'App Dynamics',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question122',
              title: 'Splunk',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question123',
              title: 'Performance tuning build and ci jobs',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question79',
              title: 'Git/Gitlab/Github',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question80',
              title: 'BitBucket',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question81',
              title: 'TDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question82',
              title: 'BDD',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question83',
              title: 'Agile Methodology',
              isRequired: true,
              rateMax: 10
            },
            {
              type: 'rating',
              name: 'question84',
              title: 'JIRA, Confluence',
              isRequired: true,
              rateMax: 10
            }
          ],
          visibleIf: "{question3} = 'item5'",
          title: 'DevOps'
        }
      ],
      showPrevButton: false,
      showQuestionNumbers: 'onPage',
      showProgressBar: 'top',
      checkErrorsMode: 'onValueChanged'
    };

    var model = new Survey.ReactSurveyModel(json);
    Survey.SurveyNG.render('surveyContainer', { model: model });
  }
}
