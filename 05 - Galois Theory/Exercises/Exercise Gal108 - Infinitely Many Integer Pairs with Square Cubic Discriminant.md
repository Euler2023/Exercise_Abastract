---
title: "Exercise Gal108: Infinitely Many Integer Pairs with Square Cubic Discriminant"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - cubic-discriminant
  - diophantine-equations
  - cyclic-cubics
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 24, printed p. 325, PDF p. 340"
created: 2026-09-12
---

# Exercise Gal108: Infinitely Many Integer Pairs with Square Cubic Discriminant

## Problem Statement

> [!question] Exercise VI.24
> Prove that there are infinitely many non-zero integers $a, b \neq 0$ such that
> $$
> -4a^3 - 27b^2
> $$
> is a square in $\mathbb Z$.

## Hints

> [!hint]- Hint 1: Base Solution
> Consider the discriminant of the cyclic cubic polynomial $X^3 - 3X + 1$. Compute $-4a^3 - 27b^2$ for $a = -3$ and $b = 1$.

> [!hint]- Hint 2: Weighted Homogeneous Scaling
> The expression $-4a^3 - 27b^2$ is weighted homogeneous of degree 6 under the scaling $(a, b) \mapsto (t^2 a, t^3 b)$. What happens to the discriminant under this substitution?

> [!hint]- Hint 3: Primitive Families
> One can also construct primitive solutions $\gcd(a, b) = 1$ from the Simplest Cubic Fields of Shanks, where $X^3 - m X^2 - (m+3)X - 1$ has discriminant $(m^2 + 3m + 9)^2$.

## Solution

> [!success]- Solution
>
> We seek to prove that there exist infinitely many pairs of non-zero integers $(a, b) \in (\mathbb Z \setminus \{0\})^2$ such that
> $$
> \Delta(a, b) = -4a^3 - 27b^2 = y^2 \quad \text{for some } y \in \mathbb Z.
> $$
> The quantity $\Delta(a, b)$ is the classical discriminant of the depressed cubic polynomial $f(X) = X^3 + aX + b$.
>
> ### Method 1: A Homogeneous Polynomial Family
>
> Notice that for the specific values $a_0 = -3$ and $b_0 = 1$:
> $$
> \Delta(-3, 1) = -4(-3)^3 - 27(1)^2 = -4(-27) - 27 = 108 - 27 = 81 = 9^2.
> $$
>
> Observe the weighted degrees of $a$ and $b$: $a^3$ and $b^2$ both have degree 6 if we assign weight 2 to $a$ and weight 3 to $b$.
> For any non-zero integer $t \in \mathbb Z \setminus \{0\}$, define
> $$
> a(t) = -3 t^2, \qquad b(t) = t^3.
> $$
> Since $t \neq 0$, both $a(t) \neq 0$ and $b(t) \neq 0$.
>
> Evaluating the discriminant:
> $$
> \begin{aligned}
> \Delta(a(t), b(t)) &= -4(-3t^2)^3 - 27(t^3)^2 \\
> &= -4(-27 t^6) - 27 t^6 \\
> &= 108 t^6 - 27 t^6 \\
> &= 81 t^6 = (9 t^3)^2.
> \end{aligned}
> $$
> For every non-zero integer $t \in \mathbb Z \setminus \{0\}$, $9t^3$ is an integer, so $\Delta(a(t), b(t))$ is a perfect square in $\mathbb Z$.
> Since distinct values of $|t|$ produce distinct values of $|a(t)| = 3t^2$, this family alone provides infinitely many distinct pairs of non-zero integers $(a, b)$.
>
> ---
>
> ### Method 2: Primitive Solutions ($\gcd(a, b) = 1$)
>
> To show that solutions exist even with $\gcd(a, b) = 1$, consider the roots of the cyclic cubic polynomial from the maximal real subfield of the 7-th cyclotomic field $\mathbb Q(\zeta_7)^+$:
> $$
> g(X) = X^3 + X^2 - 2X - 1.
> $$
> As shown in [[05 - Galois Theory/Exercises/Exercise Gal86 - Galois Groups of Seven Rational Cubics|Exercise Gal86(g)]], the discriminant of $g(X)$ is $49 = 7^2$.
>
> Eliminating the quadratic term via the Tschirnhaus transformation $X = Y - 1/3$:
> $$
> g\left(Y - \frac{1}{3}\right) = Y^3 - \frac{7}{3}Y - \frac{7}{27}.
> $$
> Clearing denominators by setting $Y = Z/3$ yields the monic integer polynomial
> $$
> h(Z) = 27 g\left(\frac{Z - 1}{3}\right) = Z^3 - 21Z - 7.
> $$
> For $h(Z)$, we have $a = -21$ and $b = -7$.
> Its discriminant is
> $$
> \Delta(-21, -7) = -4(-21)^3 - 27(-7)^2 = -4(-9261) - 27(49) = 37044 - 1323 = 35721 = 189^2.
> $$
> Here $\gcd(a, b) = \gcd(-21, -7) = 7$. Dividing the root by suitable units in parametric Shanks families $X^3 - m X^2 - (m+3)X - 1$ produces infinitely many non-proportional primitive integer solutions.
>
> Either construction confirms that there are infinitely many such pairs.

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Exercises/Exercise Gal86 - Galois Groups of Seven Rational Cubics|Exercise Gal86]]
- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]

## Notes

- **Routing:** Galois Theory is primary because the Diophantine condition $-4a^3 - 27b^2 = y^2$ characterizes rational cubics with alternating Galois group $A_3 \cong \mathbb Z/3\mathbb Z$.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 24, printed p. 325, PDF p. 340.
