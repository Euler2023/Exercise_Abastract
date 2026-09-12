---
title: "Exercise Gal102: Roots of Unity in Quadratic Fields and Quadratic Cyclotomic Polynomials"
topic: galois-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - galois-theory
  - roots-of-unity
  - quadratic-fields
  - cyclotomic-extensions
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 18, printed p. 323, PDF p. 338"
created: 2026-09-12
---

# Exercise Gal102: Roots of Unity in Quadratic Fields and Quadratic Cyclotomic Polynomials

## Problem Statement

> [!question] Exercise VI.18
> (a) Determine which roots of unity lie in the following fields:
> $$
> \mathbb Q(i), \quad \mathbb Q(\sqrt{-2}), \quad \mathbb Q(\sqrt{2}), \quad \mathbb Q(\sqrt{-3}), \quad \mathbb Q(\sqrt{3}), \quad \mathbb Q(\sqrt{-5}).
> $$
>
> (b) For which integers $m$ does a primitive $m$-th root of unity have degree 2 over $\mathbb Q$?

## Hints

> [!hint]- Hint 1: Solve Part (b) First
> The degree $[\mathbb Q(\zeta_m) : \mathbb Q]$ equals $\varphi(m)$. Solve the arithmetic equation $\varphi(m) = 2$ for positive integers $m$.

> [!hint]- Hint 2: Real Fields
> Any real subfield $K \subset \mathbb R$ can only contain real roots of unity. What are the only real roots of unity?

> [!hint]- Hint 3: Intermediate Cyclotomic Fields
> If a quadratic field $K$ contains a root of unity of order $m$, then $\mathbb Q(\zeta_m) \subseteq K$. Since $[K:\mathbb Q] = 2$, this forces $\varphi(m) \in \{1, 2\}$.

## Solution

> [!success]- Solution
>
> ### (b) Integers $m$ with $[\mathbb Q(\zeta_m) : \mathbb Q] = 2$
>
> For any positive integer $m$, the degree of the $m$-th cyclotomic field over $\mathbb Q$ is $[\mathbb Q(\zeta_m) : \mathbb Q] = \varphi(m)$.
> We solve the equation
> $$
> \varphi(m) = 2.
> $$
> Write the prime factorization of $m$ as $m = 2^k p_1^{a_1} \dots p_r^{a_r}$ with distinct odd primes $p_i$. Then
> $$
> \varphi(m) = \varphi(2^k) \prod_{i=1}^r p_i^{a_i - 1}(p_i - 1).
> $$
> If $p \ge 5$ is a prime dividing $m$, then $p - 1 \ge 4$, so $\varphi(m) \ge 4 > 2$.
> Thus the only possible prime factors of $m$ are $2$ and $3$.
> - If $3 \mid m$: $\varphi(3) = 2$.
>   - For $m = 3$: $\varphi(3) = 2$.
>   - For $m = 2 \times 3 = 6$: $\varphi(6) = \varphi(2)\varphi(3) = 1 \times 2 = 2$.
>   - For $m = 9$: $\varphi(9) = 3(2) = 6 > 2$.
>   - For $m = 12$: $\varphi(12) = \varphi(4)\varphi(3) = 2 \times 2 = 4 > 2$.
> - If $3 \nmid m$: then $m = 2^k$.
>   - $\varphi(2^k) = 2^{k-1} = 2 \implies k = 2 \implies m = 4$.
>
> Therefore, $\varphi(m) = 2$ if and only if
> $$
> \boxed{m \in \{3, 4, 6\}.}
> $$
> The corresponding cyclotomic fields are:
> - $\mathbb Q(\zeta_3) = \mathbb Q\left(\frac{-1 + \sqrt{-3}}{2}\right) = \mathbb Q(\sqrt{-3})$;
> - $\mathbb Q(\zeta_4) = \mathbb Q(i) = \mathbb Q(\sqrt{-1})$;
> - $\mathbb Q(\zeta_6) = \mathbb Q\left(\frac{1 + \sqrt{-3}}{2}\right) = \mathbb Q(\sqrt{-3})$.
>
> ---
>
> ### (a) Roots of Unity in the Six Quadratic Fields
>
> Let $K$ be a quadratic field over $\mathbb Q$. If $\zeta_m \in K$, then $\mathbb Q(\zeta_m) \subseteq K$.
> By the tower law, $\varphi(m) = [\mathbb Q(\zeta_m) : \mathbb Q]$ must divide $[K : \mathbb Q] = 2$.
> Thus $\varphi(m) \in \{1, 2\}$, which restricts $m$ to:
> $$
> m \in \{1, 2, 3, 4, 6\}.
> $$
> - The roots of unity with $m \in \{1, 2\}$ are $\{\pm 1\} = \mu_2$, which lie in every number field.
> - The roots of unity with $m = 4$ generate $\mathbb Q(i)$.
> - The roots of unity with $m \in \{3, 6\}$ generate $\mathbb Q(\sqrt{-3})$.
>
> We examine each field:
>
> 1. **$\mathbb Q(i)$:**
>    Contains $\mu_4 = \{\pm 1, \pm i\}$. Since $\sqrt{-3} \notin \mathbb Q(i)$, it contains no roots of order 3 or 6.
>    $$
>    \mu(\mathbb Q(i)) = \{\pm 1, \pm i\} \cong \mu_4.
>    $$
>
> 2. **$\mathbb Q(\sqrt{-2})$:**
>    Contains neither $i$ nor $\sqrt{-3}$ (as $\mathbb Q(\sqrt{-2}) \neq \mathbb Q(i)$ and $\mathbb Q(\sqrt{-2}) \neq \mathbb Q(\sqrt{-3})$).
>    $$
>    \mu(\mathbb Q(\sqrt{-2})) = \{\pm 1\} \cong \mu_2.
>    $$
>
> 3. **$\mathbb Q(\sqrt{2})$:**
>    This is a real field: $\mathbb Q(\sqrt{2}) \subset \mathbb R$. The only roots of unity in $\mathbb R$ are $\pm 1$.
>    $$
>    \mu(\mathbb Q(\sqrt{2})) = \{\pm 1\} \cong \mu_2.
>    $$
>
> 4. **$\mathbb Q(\sqrt{-3})$:**
>    Contains the primitive 6-th roots of unity $\zeta_6 = \frac{1 + \sqrt{-3}}{2}$ and $\zeta_3 = \frac{-1 + \sqrt{-3}}{2}$. It does not contain $i$.
>    $$
>    \mu(\mathbb Q(\sqrt{-3})) = \left\{\pm 1, \ \frac{\pm 1 \pm \sqrt{-3}}{2}\right\} \cong \mu_6.
>    $$
>
> 5. **$\mathbb Q(\sqrt{3})$:**
>    This is a real field: $\mathbb Q(\sqrt{3}) \subset \mathbb R$.
>    $$
>    \mu(\mathbb Q(\sqrt{3})) = \{\pm 1\} \cong \mu_2.
>    $$
>
> 6. **$\mathbb Q(\sqrt{-5})$:**
>    Contains neither $i$ nor $\sqrt{-3}$.
>    $$
>    \mu(\mathbb Q(\sqrt{-5})) = \{\pm 1\} \cong \mu_2.
>    $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[05 - Galois Theory/Exercises/Exercise Gal101 - Roots of Unity in Characteristic Prime to 2n and Finite Number of Roots of Unity|Exercise Gal101]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Galois Theory is primary because roots of unity in quadratic fields govern torsion subgroups of abelian varieties and cyclotomic embeddings.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 18, printed p. 323, PDF p. 338.
