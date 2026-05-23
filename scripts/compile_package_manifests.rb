require 'psych'
require 'json'

require_relative 'utils/workspace'

package_manifest_filename = 'package.yaml'
compiled_package_manifest_filename = 'package.json'

Workspace.packages.each do |package|
  package_manifest_file = package / package_manifest_filename
  compiled_package_manifest_file = package / compiled_package_manifest_filename

  if !compiled_package_manifest_file.exist? || package_manifest_file.mtime > compiled_package_manifest_file.mtime
    package_manifest = Psych.safe_load_file package_manifest_file, aliases: true

    compiled_package_manifest_file.open(mode = 'w') do |file|
      file.write JSON.pretty_generate(package_manifest)
    end
  end
end
