---
title: 'Exercise Gal173: The Abstract Hilbert Pairing'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 2, printed p. 305, PDF p. 324
source_refs:
- S4/ch-IV/sec-6/ex-2
created: '2026-10-23'
---

# Exercise Gal173: The Abstract Hilbert Pairing

## Problem Statement

> [!question] Neukirch IV.§6, Exercise 2
> Under the hypotheses of exercise 1, Kummer theory and class field theory yield, via Pontryagin duality $G(L/K)\times\operatorname{Hom}(G(L/K),\mu_n)\to\mu_n$, a nondegenerate bilinear mapping (the abstract "Hilbert symbol")
> $$
> (\ ,\ ):A_K/A_K^n\times A_K/A_K^n\longrightarrow\mu_n.
> $$

## Hints

> [!hint]- Hint 1 — first step
> Associate to a class $b$ its Kummer character and to a class $a$ its reciprocity automorphism; evaluate that character at that automorphism.

> [!hint]- Hint 2 — proof route
> Put reciprocity in the first slot and the Kummer character in the second. Do not infer skew symmetry from bilinearity alone.

## Solution

> [!success]- Independent derivation
> The preceding exercise identifies the norm group with the power subgroup, so reciprocity gives $\operatorname{rec}:A_K/A_K^n\xrightarrow{\sim}G(L/K)$. The Kummer isomorphism sends the class of $b\in A_K$ to the character
> $$
> \chi_b(\sigma)=\frac{\sigma\beta}{\beta},\qquad\beta^n=b.
> $$
> Since $\mu_n$ is fixed by $G_K$, replacing the root $\beta$ does not change the character. Multiplying $b$ by an $n$th power does not change it either. Define $(\bar a,\bar b)=\chi_b(\operatorname{rec}(\bar a))$. Both isomorphisms and the evaluation pairing are group homomorphisms, so the pairing is multiplicatively bilinear in the two variables.
> If $\bar a\ne1$, then $\operatorname{rec}(\bar a)$ is not the identity. The $\mu_n$-characters of a finite abelian group separate points, so some $\chi_b$ has evaluation different from $1$. If $\bar b\ne1$, the nontrivial character $\chi_b$ is nontrivial on some group element; surjectivity of reciprocity provides a detecting $\bar a$. Thus the pairing is nondegenerate on both sides.
> This exercise constructs a general abstract pairing only. Symmetry, antisymmetry, and Steinberg relations require additional structure and do not follow automatically from this construction.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Theory]]
- [[08 - Arithmetic Geometry/Concepts/Adeles and Ideles|Class Field Theory Context]]

## Notes

The statement was checked against the original 200 dpi page images. [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §6, Exercise 2, printed p.305, PDF p.324]. The solution is independently derived, using this chapter's conventions for abstract fields, continuous discrete $G$-modules, restrictions, and norms.
