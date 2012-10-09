#!/usr/bin/env rake

# BUNDLER

begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end


# TEST

require 'rspec/core/rake_task'
RSpec::Core::RakeTask.new :default


# OPAL

# Rakefile
require 'opal/rake_task'

Opal::RakeTask.new do |t|
  t.build_dir    = 'lib/assets/javascripts'
  t.dependencies = %w[opal-jquery opal-spec]
  t.files        = []
end
