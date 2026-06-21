require 'fileutils'
require 'optparse'

require_relative 'utils/workspace'

options = {}
OptionParser.new do |parser|
  parser.on("--lockfile", "Remove lockfile in addition to other files")
end.parse(ARGV, into: options)

entries_to_remove = [
  # Folders
  '.output',
  '.data',
  '.nuxt',
  '.nitro',
  '.cache',
  'dist',
  'playwright-report',
  'test-results',

  # Files
  'package.json'
]

system "pnpm pm clean #{"--lockfile" if options[:lockfile]}"

Workspace.packages.each do |package|
  entries_to_remove.each do |entry|
    FileUtils.remove_entry_secure(package / entry, force = true)
  end
end
