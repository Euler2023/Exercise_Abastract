---
title: "Exercise Gal97: Galois Groups of Three Polynomials via Reduction Modulo Primes"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - reduction-mod-p
  - symmetric-group
  - cycle-type
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 13, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal97: Galois Groups of Three Polynomials via Reduction Modulo Primes

## Problem Statement

> [!question] Exercise VI.13
> What is the Galois group over the rationals of the following polynomials:
>
> (a) $X^4 + 2X^2 + X + 3$
>
> (b) $X^4 + 3X^3 - 3X - 2$
>
> (c) $X^6 + 22X^5 - 9X^4 + 12X^3 - 37X^2 - 29X - 15$
>
> [Hint: Reduce mod 2, 3, 5.]

## Hints

> [!hint]- Hint 1: Dedekind's Reduction Theorem
> Let $f(X) \in \mathbb Z[X]$ be a monic polynomial. If $p$ is a prime not dividing the discriminant of $f$, and the reduction $\overline{f}(X) \in \mathbb F_p[X]$ factors into distinct irreducible factors of degrees $d_1, d_2, \dots, d_r$, then $\operatorname{Gal}(f/\mathbb Q)$ contains a permutation of cycle type $(d_1, d_2, \dots, d_r)$.

> [!hint]- Hint 2: Generating $S_4$ and $S_6$
> - A subgroup of $S_4$ containing a 4-cycle and a 3-cycle is the entire symmetric group $S_4$.
> - A transitive subgroup of $S_n$ containing a transposition and an $(n-1)$-cycle is the entire symmetric group $S_n$.

## Solution

> [!success]- Solution
>
> ### (a) $f(X) = X^4 + 2X^2 + X + 3$
>
> 1. **Reduction Modulo 2:**
>    $$
>    \overline{f}(X) \equiv X^4 + X + 1 \pmod 2.
>    $$
>    Testing roots in $\mathbb F_2$: $\overline{f}(0) = 1$ and $\overline{f}(1) = 1$, so there are no linear factors.
>    The only irreducible quadratic in $\mathbb F_2[X]$ is $X^2 + X + 1$, and $(X^2 + X + 1)^2 = X^4 + X^2 + 1 \neq X^4 + X + 1$.
>    Thus $X^4 + X + 1$ is irreducible in $\mathbb F_2[X]$.
>    This implies:
>    - $f(X)$ is irreducible over $\mathbb Q$, so the Galois group $G \le S_4$ acts transitively on the four roots;
>    - By Dedekind's reduction theorem, $G$ contains a **4-cycle**.
>
> 2. **Reduction Modulo 3:**
>    $$
>    \overline{f}(X) \equiv X^4 + 2X^2 + X = X(X^3 + 2X + 1) \pmod 3.
>    $$
>    Let $g(X) = X^3 + 2X + 1 \in \mathbb F_3[X]$. Evaluating on $\mathbb F_3$:
>    - $g(0) = 1 \neq 0$;
>    - $g(1) = 1 + 2 + 1 = 4 \equiv 1 \neq 0$;
>    - $g(2) = 8 + 4 + 1 = 13 \equiv 1 \neq 0$.
>
>    Thus $g(X)$ is an irreducible cubic in $\mathbb F_3[X]$. Since $\gcd(X, g(X)) = 1$ and $g'(X) = 3X^2 + 2 \equiv 2 \neq 0$, $\overline{f}$ is separable over $\mathbb F_3$.
>    By Dedekind's theorem, $G$ contains a **3-cycle** (fixing one root and cyclically permuting the other three).
>
> 3. **Conclusion for (a):**
>    The group $G \le S_4$ contains an element of order 4 (a 4-cycle) and an element of order 3 (a 3-cycle). Thus $|G|$ is divisible by $\operatorname{lcm}(4, 3) = 12$. The only subgroup of $S_4$ of order 12 is the alternating group $A_4$, which contains no 4-cycles (as 4-cycles are odd permutations).
>    Hence $|G| = 24$, and
>    $$
>    \operatorname{Gal}(f/\mathbb Q) \cong S_4.
>    $$
>
> ---
>
> ### (b) $f(X) = X^4 + 3X^3 - 3X - 2$
>
> 1. **Reduction Modulo 2:**
>    $$
>    \overline{f}(X) \equiv X^4 + X^3 + X = X(X^3 + X^2 + 1) \pmod 2.
>    $$
>    The cubic $X^3 + X^2 + 1$ has no roots in $\mathbb F_2$ ($0 \mapsto 1, 1 \mapsto 1$), so it is irreducible in $\mathbb F_2[X]$. Since $\gcd(X, X^3 + X^2 + 1) = 1$, the reduction is square-free, so $G$ contains a **3-cycle**.
>
> 2. **Reduction Modulo 5:**
>    $$
>    \overline{f}(X) \equiv X^4 + 3X^3 + 2X + 3 \pmod 5.
>    $$
>    Evaluating $\overline{f}(x)$ for $x \in \mathbb F_5$:
>    - $\overline{f}(0) = 3 \neq 0$;
>    - $\overline{f}(1) = 1 + 3 + 2 + 3 = 9 \equiv 4 \neq 0$;
>    - $\overline{f}(2) = 16 + 24 + 4 + 3 = 47 \equiv 2 \neq 0$;
>    - $\overline{f}(3) = 81 + 81 + 6 + 3 = 171 \equiv 1 \neq 0$;
>    - $\overline{f}(4) = 256 + 192 + 8 + 3 = 459 \equiv 4 \neq 0$.
>
>    Thus $\overline{f}(X)$ has no linear factors in $\mathbb F_5[X]$.
>    Testing for quadratic factors: if $\overline{f}(X) = (X^2 + aX + b)(X^2 + cX + d)$, then $a + c \equiv 3$, $b + d + ac \equiv 0$, $ad + bc \equiv 2$, $bd \equiv 3 \pmod 5$. A direct check over the pairs $(b, d) \in \{(1, 3), (2, 4)\}$ shows no consistent solutions for $a, c \in \mathbb F_5$.
>    Therefore, $\overline{f}(X)$ is irreducible in $\mathbb F_5[X]$.
>    By Dedekind's theorem:
>    - $f(X)$ is irreducible over $\mathbb Q$;
>    - $G$ contains a **4-cycle**.
>
> 3. **Conclusion for (b):**
>    As in part (a), $G$ is a subgroup of $S_4$ containing both a 3-cycle and a 4-cycle, which forces
>    $$
>    \operatorname{Gal}(f/\mathbb Q) \cong S_4.
>    $$
>
> ---
>
> ### (c) $f(X) = X^6 + 22X^5 - 9X^4 + 12X^3 - 37X^2 - 29X - 15$
>
> 1. **Reduction Modulo 2:**
>    $$
>    \overline{f}(X) \equiv X^6 + X^4 + X^2 + X + 1 \pmod 2.
>    $$
>    - No roots in $\mathbb F_2$: $0 \mapsto 1, 1 \mapsto 1$.
>    - Irreducible quadratic $X^2 + X + 1$ does not divide $\overline{f}$:
>      $(X^6 + X^4 + X^2 + X + 1) = (X^4 + X^3 + X)(X^2 + X + 1) + 1 \neq 0$.
>    - Irreducible cubics $X^3 + X + 1$ and $X^3 + X^2 + 1$ do not divide $\overline{f}$.
>    Hence $\overline{f}(X)$ is irreducible in $\mathbb F_2[X]$.
>    Therefore, $f(X)$ is irreducible over $\mathbb Q$, and $G \le S_6$ is a transitive subgroup containing a **6-cycle**.
>
> 2. **Reduction Modulo 3:**
>    $$
>    \overline{f}(X) \equiv X^6 + X^5 - X^2 + X \equiv X(X^5 + X^4 - X + 1) \pmod 3.
>    $$
>    Let $h(X) = X^5 + X^4 + 2X + 1 \in \mathbb F_3[X]$.
>    Testing for roots:
>    - $h(0) = 1$;
>    - $h(1) = 1 + 1 + 2 + 1 = 5 \equiv 2$;
>    - $h(2) = 32 + 16 + 4 + 1 = 53 \equiv 2$.
>    No linear factors. Testing quadratic factors ($X^2 + 1, X^2 + X + 2, X^2 + 2X + 2$) reveals that none divides $h(X)$.
>    Thus $h(X)$ is irreducible of degree 5 in $\mathbb F_3[X]$.
>    Since $\gcd(X, h(X)) = 1$, Dedekind's theorem implies that $G$ contains a **5-cycle** (fixing one root and acting transitively on the other 5).
>
> 3. **Reduction Modulo 5:**
>    $$
>    \overline{f}(X) \equiv X^6 + 2X^5 + X^4 + 2X^3 + 3X^2 + X \equiv X(X^5 + 2X^4 + X^3 + 2X^2 + 3X + 1) \pmod 5.
>    $$
>    Factoring over $\mathbb F_5$:
>    $$
>    \overline{f}(X) \equiv X (X - 1) (X + 1) (X + 2) (X^2 + 2) \pmod 5.
>    $$
>    The quadratic $X^2 + 2$ has no roots in $\mathbb F_5$ (squares in $\mathbb F_5$ are $0, 1, 4$, while $-2 \equiv 3$).
>    The roots of the linear factors are $0, 1, 4, 3$, all distinct from each other and from the roots of $X^2 + 2$.
>    Thus $\overline{f}(X)$ has four distinct linear factors and one irreducible quadratic factor.
>    By Dedekind's theorem, $G$ contains a **transposition** (cycle type $(2, 1, 1, 1, 1)$).
>
> 4. **Conclusion for (c):**
>    The Galois group $G \le S_6$ is transitive (from the 6-cycle) and contains:
>    - A 5-cycle $\sigma$ of length $6 - 1 = 5$;
>    - A transposition $\tau$.
>
>    By a classical theorem of Jordan on permutation groups, any transitive subgroup of $S_n$ containing a transposition and an $(n-1)$-cycle is the full symmetric group $S_n$.
>    Therefore,
>    $$
>    \operatorname{Gal}(f/\mathbb Q) \cong S_6.
>    $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Finite Fields Galois|Galois Theory of Finite Fields]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]

## Notes

- **Routing:** Galois Theory is primary because computing Galois groups via Dedekind's reduction theorem modulo primes is a fundamental method of algebraic number theory and Galois theory.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 13, printed p. 322, PDF p. 337.
