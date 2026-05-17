require 'psych'
require 'json'

package_manifest_filename = 'package.yaml'
compiled_package_manifest_filename = 'package.json'

workspace_settings = Psych.safe_load_file 'pnpm-workspace.yaml', aliases: true, symbolize_names: true

workspace_packages = workspace_settings[:packages].unshift('.').map { |glob| Pathname glob }

workspace_packages.each do |package_glob|
  Pathname.glob(package_glob / package_manifest_filename) do |package_manifest_file|
    compiled_package_manifest_file = package_manifest_file.dirname / compiled_package_manifest_filename

    if !compiled_package_manifest_file.exist? || package_manifest_file.mtime > compiled_package_manifest_file.mtime
      package_manifest = Psych.safe_load_file package_manifest_file, aliases: true

      compiled_package_manifest_file.open(mode = 'w') do |file|
        file.write JSON.pretty_generate(package_manifest)
      end
    end
  end
end
