import { module, test } from 'qunit';
import { run } from '@ember/runloop';

module('leak test', function() {
  test('it leaks', function(assert) {
    assert.expect(1);

    run.later(() => {}, 1000);

    assert.ok(true);
  });
});