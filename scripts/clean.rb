require 'fileutils'

require_relative 'utils/workspace'

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

system 'pnpm pm clean'

Workspace.packages.each do |package|
  entries_to_remove.each do |entry|
    FileUtils.remove_entry_secure(package / entry, force = true)
  end
end
