---
title: "Exercise AG13: Riemann Existence for Quadratic Extensions"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - quadratic-extensions
  - riemann-existence
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 9, Ex. 9.4, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise AG13: Riemann Existence for Quadratic Extensions

## Problem Statement

> [!question] Exercise
> Prove the Riemann Existence Theorem for quadratic extensions.
>
> **Hint:** Show that, up to isomorphism, a quadratic extension of $F$ is described by the finite set $\{p_1,\ldots,p_k\}$ of its true branch points.

## Hints

> [!hint]- Hint 1
> Complete the square to write a quadratic extension of $\mathbb C(t)$ as $\mathbb C(t)(\sqrt a)$.

> [!hint]- Hint 2
> Multiplying $a$ by a square does not change the extension. Reduce every zero and pole order modulo $2$.

## Solution

> [!success]- Solution
> Put $F=\mathbb C(t)$. Because $\operatorname{char}F=0$, every nontrivial quadratic extension has the form
> $$
> K=F(\sqrt a),\qquad a\in F^\times/F^{\times2}.
> $$
> A finite point $p\in\mathbb C$ is a true branch point exactly when the valuation $v_p(a)$ is odd. Multiplying $a$ by a square changes every valuation by an even integer, so it does not change this set.
>
> Factor the numerator and denominator of $a$. After removing square factors, and using that every nonzero complex constant is a square, the square class of $a$ has a unique representative
> $$
> a_B(t)=\prod_{p\in B}(t-p),
> $$
> where $B$ is the finite set of finite points at which $v_p(a)$ is odd. Thus
> $$
> K\cong F\left(\sqrt{\prod_{p\in B}(t-p)}\right).
> $$
> For a nontrivial quadratic extension, $B$ is nonempty in the affine plane; otherwise the square class is trivial.
> A loop around any $p\in B$ changes the sign of the square root, so its gluing permutation is $(12)$. At points outside $B$, the local order is even and the two branches return to themselves.
>
> Conversely, given a finite set $B$, the displayed equation constructs a two-sheeted covering with true branch set $B$ in the affine $t$-plane. Its gluing data are forced: every true branch point has permutation $(12)$. Hence any two connected quadratic coverings with the same $B$ have identical gluing data and are isomorphic. Algebraically, if $a$ and $b$ have the same odd valuations, then $a/b$ has even valuation at every point of $\mathbb P^1$; a rational function on $\mathbb P^1$ with even divisor is a square up to a complex constant, and that constant is also a square. Therefore $F(\sqrt a)\cong F(\sqrt b)$.
>
> This proves existence and uniqueness for quadratic extensions. On the projective line, infinity is a branch point exactly when $|B|$ is odd; consequently the total number of projective branch points is even.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

The proof is complete for degree $2$ over $\mathbb C(t)$. It imports only elementary valuation/divisor facts for rational functions. It does not prove the general degree-$n$ Riemann Existence Theorem stated in S1.
