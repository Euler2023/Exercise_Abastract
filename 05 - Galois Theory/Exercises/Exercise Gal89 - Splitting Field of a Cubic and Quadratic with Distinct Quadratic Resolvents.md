---
title: "Exercise Gal89: Splitting Field of a Cubic and Quadratic with Distinct Quadratic Resolvents"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - splitting-field
  - compositum
  - primitive-element
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 5, printed p. 321, PDF p. 336"
created: 2026-09-12
---

# Exercise Gal89: Splitting Field of a Cubic and Quadratic with Distinct Quadratic Resolvents

## Problem Statement

> [!question] Exercise VI.5
> Let $k$ be a field of characteristic $\neq 2, 3$. Let $f(X), g(X) = X^2 - c$ be irreducible polynomials over $k$, of degree 3 and 2 respectively. Let $D$ be the discriminant of $f$. Assume that
> $$
> [k(D^{1/2}) : k] = 2 \quad \text{and} \quad k(D^{1/2}) \neq k(c^{1/2}).
> $$
> Let $\alpha$ be a root of $f$ and $\beta$ a root of $g$ in an algebraic closure. Prove:
>
> (a) The splitting field of $fg$ over $k$ has degree 12.
>
> (b) Let $\gamma = \alpha + \beta$. Then $[k(\gamma) : k] = 6$.

## Hints

> [!hint]- Hint 1: Linear Disjointness of Splitting Fields
> Determine the splitting fields $K_f$ and $K_g$ of $f$ and $g$ over $k$. Show that $K_f \cap K_g = k$ by observing that $k(D^{1/2})$ is the unique quadratic subfield of $K_f$.

> [!hint]- Hint 2: Orbit Size for Part (b)
> In a Galois extension $K/k$, the degree $[k(\gamma) : k]$ equals the cardinality of the Galois orbit of $\gamma$. Compute all conjugates of $\gamma = \alpha + \beta$ under $\operatorname{Gal}(K/k) \cong S_3 \times C_2$, and verify that they are all distinct.

## Solution

> [!success]- Solution
>
> ### (a) Degree of the Splitting Field of $fg$
>
> Let $K_f$ be the splitting field of $f$ over $k$, and $K_g$ the splitting field of $g(X) = X^2 - c$ over $k$.
> - Since $f$ is an irreducible cubic over $k$ and $[k(D^{1/2}) : k] = 2$, the discriminant $D$ is not a square in $k$. Therefore, the Galois group of $f$ over $k$ is the symmetric group $S_3$, and
>   $$
>   [K_f : k] = 6.
>   $$
>   Under the Galois correspondence, the intermediate fields of $K_f/k$ correspond to subgroups of $S_3$. The only subgroup of index 2 in $S_3$ is the alternating group $A_3$, which fixes $k(D^{1/2})$. Hence $k(D^{1/2})$ is the unique subfield of $K_f$ having degree 2 over $k$.
>
> - The polynomial $g(X) = X^2 - c$ is irreducible over $k$, so $c \notin k^2$, and $K_g = k(\beta) = k(c^{1/2})$ has degree
>   $$
>   [K_g : k] = 2.
>   $$
>
> Now consider the intersection $K_f \cap K_g$. Since $K_g/k$ is of prime degree 2, the only subfields of $K_g$ containing $k$ are $k$ and $K_g$. If $K_g \subseteq K_f$, then $K_g$ would be a quadratic subfield of $K_f$, forcing $K_g = k(D^{1/2})$. But by hypothesis, $k(c^{1/2}) \neq k(D^{1/2})$.
>
> Thus,
> $$
> K_f \cap K_g = k.
> $$
> Because $K_f$ and $K_g$ are both Galois extensions of $k$ with trivial intersection, their compositum $K = K_f K_g$ is the splitting field of $fg$ over $k$, and
> $$
> [K : k] = [K_f : k] [K_g : k] = 6 \times 2 = 12.
> $$
> Furthermore, the Galois group is
> $$
> \operatorname{Gal}(K/k) \cong \operatorname{Gal}(K_f/k) \times \operatorname{Gal}(K_g/k) \cong S_3 \times C_2.
> $$
>
> ---
>
> ### (b) Degree of $\gamma = \alpha + \beta$ over $k$
>
> Let $\alpha = \alpha_1, \alpha_2, \alpha_3$ be the three distinct roots of $f$ in $K_f$, and $\pm\beta$ the two roots of $g$ in $K_g$.
> Since $K/k$ is Galois with Galois group $G = \operatorname{Gal}(K/k) \cong S_3 \times C_2$, any $k$-conjugate of $\gamma = \alpha + \beta$ is of the form
> $$
> \sigma(\gamma) = \sigma(\alpha) + \sigma(\beta) = \alpha_i \pm \beta, \qquad i \in \{1, 2, 3\}.
> $$
> Because $S_3$ acts 3-transitively (in particular transitively) on $\{\alpha_1, \alpha_2, \alpha_3\}$ and $C_2$ acts transitively on $\{\beta, -\beta\}$, every element of the set
> $$
> \mathcal O = \{\alpha_i + \beta, \alpha_i - \beta \mid i = 1, 2, 3\}
> $$
> is a conjugate of $\gamma$ under $G$.
>
> We claim that all 6 elements of $\mathcal O$ are pairwise distinct:
> 1. If $\alpha_i + \beta = \alpha_j + \beta$, then $\alpha_i = \alpha_j$, so $i = j$.
> 2. If $\alpha_i - \beta = \alpha_j - \beta$, then $\alpha_i = \alpha_j$, so $i = j$.
> 3. If $\alpha_i + \beta = \alpha_j - \beta$ for some $i, j$, then
>    $$
>    2\beta = \alpha_j - \alpha_i.
>    $$
>    Since $\operatorname{char}(k) \neq 2$, this implies $\beta = \frac{1}{2}(\alpha_j - \alpha_i) \in K_f$.
>    However, $K_g \cap K_f = k$, so $\beta \notin K_f$ (since $\beta \notin k$). This is a contradiction.
>
> Thus $\mathcal O$ consists of exactly 6 distinct elements.
> The degree $[k(\gamma) : k]$ is equal to the number of distinct Galois conjugates of $\gamma$ over $k$. Therefore,
> $$
> [k(\gamma) : k] = |\mathcal O| = 6.
> $$
> *(Equivalently, $k(\gamma) = k(\alpha, \beta)$ is the compositum of the degree 3 field $k(\alpha)$ and the degree 2 field $k(\beta)$, which are linearly disjoint over $k$.)*

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Composita and Restriction Maps|Composita and Restriction Maps]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Routing:** Galois Theory is primary because the proof hinges on intermediate subfield classifications of $S_3$, linear disjointness of Galois extensions, and orbit calculations.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 5, printed p. 321, PDF p. 336.
