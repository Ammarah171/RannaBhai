const Trend = () => {
    return (
        <div className='Trend'>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <a class="btn btn-ghost text-xl">Trending Recipes</a>
                </div>
                <div class="flex-none gap-2">

                    <div class="form-control">
                        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="flex flex-wrap gap-4 justify-center">
        
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Pancake" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Pancake</h2>
                        <p>Fluffy and delicious pancakes to start your day.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

        
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Pizza" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Pizza</h2>
                        <p>Cheesy and savory pizza with your favorite toppings.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

       
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Burger" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Burger</h2>
                        <p>Juicy burgers stacked with fresh ingredients.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

        
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Pasta" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Pasta</h2>
                        <p>Rich and creamy pasta that melts in your mouth.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

          
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Salad" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Salad</h2>
                        <p>A fresh and healthy salad loaded with greens.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

          
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Ice Cream" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Ice Cream</h2>
                        <p>Cold, creamy, and perfect for a summer treat.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

         
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Sushi" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Sushi</h2>
                        <p>Authentic sushi rolls with a burst of flavor.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>

         
                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Steak" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Steak</h2>
                        <p>Perfectly grilled steak with a side of veggies.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>


                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Cupcake" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Cupcake</h2>
                        <p>Sweet and fluffy cupcakes for your dessert cravings.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>


                <div class="card glass w-96">
                    <figure>
                        <img
                            src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Tacos" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Tacos</h2>
                        <p>Spicy and flavorful tacos packed with goodness.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Learn more!</button>
                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}
export default Trend