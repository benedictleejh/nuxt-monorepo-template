require 'psych'

class Workspace
  @@settings = Psych.safe_load_file 'pnpm-workspace.yaml', aliases: true, symbolize_names: true
  @@package_globs = @@settings[:packages].unshift('.').map { |glob| Pathname glob }
  @@packages =
    # `pnpm list --only-projects --depth -1 --parseable`
    #   .split
    #   .map { |path| Pathname path }
    @@package_globs
      .flat_map { |glob| Pathname.glob glob }
      .filter { |potential_package| Pathname.glob(potential_package / "package.{json,json5,yaml}").length > 0 }

  # Returns the list of packages in the workspace
  #
  # @note This does not currently rely on pnpm to get the list of packages due to the poor performance of shelling out
  #   to pnpm. We instead heuristically check for package.{json,json5,yaml} in the globs given by `packages` in
  #   `pnpm-workspace.yaml`
  #
  # @return [Array<Pathname>] The root dirs of all packages in the workspace
  def self.packages
    @@packages
  end
end
