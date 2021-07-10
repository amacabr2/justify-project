import {justify} from '../index';

describe('Test justify utils', () => {
    const TEST_CASES = [
        ['azerty', ['azerty']],
        ['azerty azerty', ['azerty azerty']],
        [
            'Etiam cum rem in sunt submittere sunt cum quod qui faciunt cum verbis contemni modo se ii enim nisi enim contingit qui in etiam qui putant quodam quodam sic qui ob qui qui in qui qui quidam qui opinione cum debent cum amicitias se sic ii enim contingit faciunt quod quidam quodam quidam qui contemni contemni amicitias amicitia iis amicitia ob modo arbitrantur verbis qui qui ut contingit rem levandi enim molestas sunt sed rem fere molestas modo quidam superiores submittere amicitias nisi Sunt etiam extollere amicitia etiam putant levandi qui inferiores inferiores se modo verbis superiores sunt etiam quodam.',
            [
                'Etiam cum rem in sunt submittere sunt cum quod qui faciunt cum verbis contemni m',
                'odo se ii enim nisi enim contingit qui in etiam qui putant quodam quodam sic qui',
                'ob qui qui in qui qui quidam qui opinione cum debent cum amicitias se sic ii en',
                'im contingit faciunt quod quidam quodam quidam qui contemni contemni amicitias a',
                'micitia iis amicitia ob modo arbitrantur verbis qui qui ut contingit rem levandi',
                'enim molestas sunt sed rem fere molestas modo quidam superiores submittere amic',
                'itias nisi Sunt etiam extollere amicitia etiam putant levandi qui inferiores inf',
                'eriores se modo verbis superiores sunt etiam quodam.',            ]
        ],
    ];

    test.each(TEST_CASES)('Text %s', (text, expected) => {
        // @ts-ignore
        expect(justify(text)).toEqual(expected);
    });
});
