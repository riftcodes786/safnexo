import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Safenexo brings together digital innovation and growth.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="hidden rounded-[15px] dark:block" alt="digital innovation illustration dark" width={1207} height={929} />
                            <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="rounded-[15px] shadow dark:hidden" alt="digital innovation illustration light" width={1207} height={929} />
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Safenexo is evolving to be more than just a digital agency. <span className="text-accent-foreground font-bold">We support an entire ecosystem</span> — from web development to AI automation.
                        </p>
                        <p className="text-muted-foreground">We support an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate and grow</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Working with Safenexo has been like unlocking a secret growth superpower. It's the perfect fusion of technology and strategy, enabling us to create digital solutions that are as innovative as they are profitable.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">Sarah Johnson, CEO</cite>
                                    <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Client Logo" height="20" width="auto" />
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
