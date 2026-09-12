---
title: "Exercise Gal96: Galois Group of x to the Fifth Minus 4x Plus 2"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - symmetric-group
  - quintic-polynomials
  - complex-conjugation
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 12, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal96: Galois Group of x to the Fifth Minus 4x Plus 2

## Problem Statement

> [!question] Exercise VI.12
> What is the Galois group over the rationals of $X^5 - 4X + 2$?

## Hints

> [!hint]- Hint 1: Irreducibility
> Use Eisenstein's criterion at $p = 2$ to show that $f(X) = X^5 - 4X + 2$ is irreducible over $\mathbb Q$. What does this imply about the order of the Galois group and its action on the roots?

> [!hint]- Hint 2: Number of Real Roots
> Analyze the derivative $f'(X) = 5X^4 - 4$ to locate the local extrema and determine the exact number of real roots of $f(X)$. How many complex non-real roots are there?

> [!hint]- Hint 3: Generation of $S_5$
> Complex conjugation acts on the roots of $f(X)$ as a transposition. Combine this with the existence of a 5-cycle to identify the Galois group.

## Solution

> [!success]- Solution
>
> Let $f(X) = X^5 - 4X + 2 \in \mathbb Q[X]$.
>
> ### 1. Irreducibility over $\mathbb Q$
>
> The prime $p = 2$ satisfies:
> - $2 \nmid 1$ (the leading coefficient);
> - $2 \mid (-4)$ and $2 \mid 2$ (all lower coefficients);
> - $2^2 = 4 \nmid 2$ (the constant term).
>
> By Eisenstein's criterion at $p = 2$, $f(X)$ is irreducible over $\mathbb Q$.
>
> Because $\deg f = 5$ is prime, adjoining one root generates a field of degree 5 over $\mathbb Q$. If $K$ denotes the splitting field of $f$ over $\mathbb Q$, the Galois group $G = \operatorname{Gal}(K/\mathbb Q)$ acts transitively on the 5 roots of $f$. By the orbit-stabilizer theorem, $5 \mid |G|$. By Cauchy's theorem, $G$ contains an element of order 5, which in $S_5$ must be a **5-cycle**.
>
> ---
>
> ### 2. Determining the Number of Real Roots
>
> Consider the real function $f(x) = x^5 - 4x + 2$. Its derivative is
> $$
> f'(x) = 5x^4 - 4.
> $$
> Setting $f'(x) = 0$ gives $x^4 = 4/5$, which has exactly two real solutions:
> $$
> x_1 = -\left(\frac{4}{5}\right)^{1/4} \approx -0.9457, \qquad x_2 = \left(\frac{4}{5}\right)^{1/4} \approx 0.9457.
> $$
> Evaluating $f(x)$ at these critical points:
> $$
> f(x_1) = -\frac{4}{5} x_1 - 4x_1 + 2 = -\frac{16}{5} x_1 + 2 = \frac{16}{5}\left(\frac{4}{5}\right)^{1/4} + 2 > 0,
> $$
> $$
> f(x_2) = \frac{4}{5} x_2 - 4x_2 + 2 = -\frac{16}{5} x_2 + 2 \approx -\frac{16}{5}(0.9457) + 2 \approx -1.026 < 0.
> $$
> Furthermore:
> - $\lim_{x \to -\infty} f(x) = -\infty$;
> - $f(x_1) > 0$;
> - $f(x_2) < 0$;
> - $\lim_{x \to +\infty} f(x) = +\infty$.
>
> By the intermediate value theorem and Rolle's theorem:
> 1. $f(x)$ has exactly one root in $(-\infty, x_1)$;
> 2. $f(x)$ has exactly one root in $(x_1, x_2)$;
> 3. $f(x)$ has exactly one root in $(x_2, +\infty)$.
>
> Thus $f(X)$ has **exactly 3 real roots** and **exactly 2 non-real complex conjugate roots** $z, \overline{z} \in \mathbb C \setminus \mathbb R$.
>
> ---
>
> ### 3. Action of Complex Conjugation
>
> Complex conjugation $\tau: \mathbb C \to \mathbb C$ fixes $\mathbb Q$ and leaves the splitting field $K \subset \mathbb C$ invariant. Hence $\tau|_K \in G = \operatorname{Gal}(K/\mathbb Q)$.
> Under $\tau$:
> - The 3 real roots are each fixed;
> - The 2 non-real roots are interchanged: $z \leftrightarrow \overline{z}$.
>
> Therefore, $\tau$ acts on the 5 roots as a **transposition** $(z \ \overline{z})$.
>
> ---
>
> ### 4. Conclusion
>
> The Galois group $G \le S_5$ is a transitive subgroup containing:
> - A 5-cycle (from Cauchy's theorem applied to $5 \mid |G|$);
> - A transposition (from complex conjugation).
>
> It is a standard theorem of permutation groups that any transitive subgroup of $S_p$ (for $p$ prime) containing a transposition is the entire symmetric group $S_p$.
>
> Therefore,
> $$
> \operatorname{Gal}(f/\mathbb Q) \cong S_5.
> $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Galois Theory is primary because computing the Galois group of this degree 5 polynomial via complex conjugation and $p$-cycles is a classic milestone in Galois theory.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 12, printed p. 322, PDF p. 337.
