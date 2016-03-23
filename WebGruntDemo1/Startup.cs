using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebGruntDemo1.Startup))]
namespace WebGruntDemo1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
