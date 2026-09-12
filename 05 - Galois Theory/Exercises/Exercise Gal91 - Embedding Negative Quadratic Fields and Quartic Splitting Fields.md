---
title: "Exercise Gal91: Embedding Negative Quadratic Fields and Quartic Splitting Fields"
topic: galois-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - galois-theory
  - cyclic-extensions
  - complex-conjugation
  - quartic-polynomials
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, Galois Theory, Exercise 7, printed p. 322, PDF p. 337"
created: 2026-09-12
---

# Exercise Gal91: Embedding Negative Quadratic Fields and Quartic Splitting Fields

## Problem Statement

> [!question] Exercise VI.7
> (a) Let $K = \mathbb Q(\sqrt{a})$ where $a \in \mathbb Z, a < 0$. Show that $K$ cannot be embedded in a cyclic extension whose degree over $\mathbb Q$ is divisible by 4.
>
> (b) Let $f(X) = X^4 + 30X^2 + 45$. Let $\alpha$ be a root of $f$. Prove that $\mathbb Q(\alpha)$ is cyclic of degree 4 over $\mathbb Q$.
>
> (c) Let $f(X) = X^4 + 4X^2 + 2$. Prove that $f$ is irreducible over $\mathbb Q$ and that the Galois group is cyclic.

## Hints

> [!hint]- Hint 1: Complex Conjugation in Part (a)
> If $L/\mathbb Q$ is a cyclic extension with $4 \mid [L:\mathbb Q]$, it contains a unique cyclic subextension $M/\mathbb Q$ of degree 4, which in turn has a unique quadratic subfield. Examine the order of the restriction of complex conjugation $\tau \in \operatorname{Gal}(\mathbb C/\mathbb R)$ to $M$.

> [!hint]- Hint 2: Application of Exercise VI.4 to Parts (b) and (c)
> For a biquadratic polynomial $X^4 + 2aX^2 + b = (X^2 - Y_1)(X^2 - Y_2)$ with $Y_{1,2} = -a \pm \sqrt{c}$, apply the cyclic criterion from [[05 - Galois Theory/Exercises/Exercise Gal88 - Kummer-Type Criterion for Degree Four Cyclic Extensions|Exercise Gal88]]: the splitting field is cyclic of degree 4 over $\mathbb Q$ if and only if $c(Y_1 Y_2) \in \mathbb Q^2$ and $Y_1 Y_2 \notin \mathbb Q^2$.

## Solution

> [!success]- Solution
>
> ### (a) Impossibility of Embedding $K = \mathbb Q(\sqrt{a})$ ($a < 0$)
>
> Let $a < 0$, so $K = \mathbb Q(\sqrt{a})$ is an imaginary quadratic field; that is, $K \subset \mathbb C$ but $K \not\subset \mathbb R$.
>
> Suppose $K$ could be embedded in a cyclic Galois extension $L/\mathbb Q$ whose degree is divisible by 4, say $[L:\mathbb Q] = 4m$.
> The Galois group $G = \operatorname{Gal}(L/\mathbb Q)$ is cyclic. A finite cyclic group has a unique subgroup of any given index. In particular, the unique subgroup of index 4 in $G$ has fixed field $M$, which is a cyclic Galois extension of $\mathbb Q$ of degree 4:
> $$
> \operatorname{Gal}(M/\mathbb Q) \cong \mathbb Z/4\mathbb Z.
> $$
> Moreover, $M$ contains the unique quadratic subfield of $L$ over $\mathbb Q$. Since $K \subseteq L$ and $[K:\mathbb Q] = 2$, $K$ must be this unique quadratic subfield, so $K \subset M$.
>
> Because $M/\mathbb Q$ is Galois, complex conjugation $\tau \in \operatorname{Gal}(\mathbb C/\mathbb R)$ restricts to a $\mathbb Q$-automorphism of $M$:
> $$
> \tau|_M \in \operatorname{Gal}(M/\mathbb Q) \cong \mathbb Z/4\mathbb Z.
> $$
> Since $\tau^2 = \operatorname{id}_{\mathbb C}$, the order of $\tau|_M$ must divide 2. In the cyclic group $\mathbb Z/4\mathbb Z$, there are only two elements whose order divides 2:
> 1. If $\tau|_M = \operatorname{id}_M$, then every element of $M$ is fixed by complex conjugation, meaning $M \subset \mathbb R$. But $K \subset M$ and $K \not\subset \mathbb R$ (as $\sqrt{a} \notin \mathbb R$ for $a < 0$), a contradiction.
> 2. If $\tau|_M$ is the unique element of order 2 in $\operatorname{Gal}(M/\mathbb Q)$, then $\tau|_M$ generates the unique index-2 subgroup $\operatorname{Gal}(M/K)$. Hence $\tau|_M$ fixes $K$ pointwise. This means every element of $K$ is invariant under complex conjugation, so $K \subset \mathbb R$, again contradicting $a < 0$.
>
> Therefore, no imaginary quadratic field can be embedded in a cyclic extension of degree divisible by 4 over $\mathbb Q$.
>
> ---
>
> ### (b) $f(X) = X^4 + 30X^2 + 45$
>
> 1. **Irreducibility:**
>    The prime $p = 5$ divides the non-leading coefficients: $5 \mid 30$ and $5 \mid 45$. The leading coefficient is $1$, and $5^2 = 25 \nmid 45$. By Eisenstein's criterion at $p = 5$, $f(X)$ is irreducible over $\mathbb Q$.
>    Therefore, $[\mathbb Q(\alpha) : \mathbb Q] = 4$.
>
> 2. **Cyclicity:**
>    Writing $Y = X^2$, the quadratic resolvent is $Y^2 + 30Y + 45 = 0$, with roots
>    $$
>    Y_{1,2} = \frac{-30 \pm \sqrt{900 - 180}}{2} = -15 \pm \sqrt{180} = -15 \pm 6\sqrt{5}.
>    $$
>    Thus the quadratic subfield is $F = \mathbb Q(\sqrt{5})$, with $c = 5$.
>    The product of the roots is
>    $$
>    Y_1 Y_2 = (-15)^2 - 5(6^2) = 225 - 180 = 45.
>    $$
>    Notice that $Y_1 Y_2 = 45$ is not a square in $\mathbb Q$, but
>    $$
>    c(Y_1 Y_2) = 5 \times 45 = 225 = 15^2 \in \mathbb Q^2.
>    $$
>    Let $\alpha = \sqrt{Y_1}$. Then the conjugate root $\alpha' = \sqrt{Y_2}$ satisfies
>    $$
>    (\alpha \alpha')^2 = Y_1 Y_2 = 45 = \frac{15^2}{5} = \left(\frac{15}{\sqrt{5}}\right)^2 = (3\sqrt{5})^2.
>    $$
>    Hence $\alpha \alpha' = 3\sqrt{5} \in F$, which shows that $\alpha' = 3\sqrt{5}/\alpha \in \mathbb Q(\alpha)$.
>    Thus all four roots $\pm \alpha, \pm \alpha'$ belong to $\mathbb Q(\alpha)$, so $\mathbb Q(\alpha)/\mathbb Q$ is a Galois extension of degree 4.
>
>    By [[05 - Galois Theory/Exercises/Exercise Gal88 - Kummer-Type Criterion for Degree Four Cyclic Extensions|Exercise Gal88]], because $c(Y_1 Y_2) \in \mathbb Q^2$, the Galois group is cyclic:
>    $$
>    \operatorname{Gal}(\mathbb Q(\alpha)/\mathbb Q) \cong C_4 \cong \mathbb Z/4\mathbb Z.
>    $$
>
> ---
>
> ### (c) $f(X) = X^4 + 4X^2 + 2$
>
> 1. **Irreducibility:**
>    The prime $p = 2$ divides $4$ and $2$, does not divide the leading coefficient $1$, and $2^2 = 4 \nmid 2$. By Eisenstein's criterion at $p = 2$, $f(X)$ is irreducible over $\mathbb Q$.
>
> 2. **Cyclic Galois Group:**
>    Setting $Y = X^2$, we solve $Y^2 + 4Y + 2 = 0$:
>    $$
>    Y_{1,2} = -2 \pm \sqrt{2}.
>    $$
>    Here the intermediate quadratic field is $F = \mathbb Q(\sqrt{2})$, with $c = 2$.
>    The product of the roots is
>    $$
>    Y_1 Y_2 = (-2)^2 - 2(1^2) = 2.
>    $$
>    We check the criterion from Exercise Gal88:
>    - $Y_1 Y_2 = 2 \notin \mathbb Q^2$;
>    - $c(Y_1 Y_2) = 2 \times 2 = 4 = 2^2 \in \mathbb Q^2$.
>
>    Since $c(Y_1 Y_2) \in \mathbb Q^2$, the splitting field $K$ has degree 4 over $\mathbb Q$ and its Galois group is cyclic:
>    $$
>    \operatorname{Gal}(f/\mathbb Q) \cong C_4 \cong \mathbb Z/4\mathbb Z.
>    $$

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[05 - Galois Theory/Exercises/Exercise Gal88 - Kummer-Type Criterion for Degree Four Cyclic Extensions|Exercise Gal88]]
- [[05 - Galois Theory/Concepts/Automorphisms|Automorphisms]]

## Notes

- **Routing:** Galois Theory is primary because the obstruction in (a) relies on the cyclic group structure under complex conjugation, and (b), (c) classify cyclic quartic Galois groups.
- **Source status:** Serge Lang, *Algebra*, rev. 3rd ed., Ch. VI, Exercise 7, printed p. 322, PDF p. 337.
