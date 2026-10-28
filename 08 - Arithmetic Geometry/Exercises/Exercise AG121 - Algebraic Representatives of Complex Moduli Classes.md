---
title: "Exercise AG121: Algebraic Representatives of Complex Moduli Classes"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.9, Exercise 7.9.1, printed p. 310, PDF p. 323"
source_refs:
  - "S7/ch-7/sec-9/ex-1"
created: 2026-10-28
---

# Exercise AG121: Algebraic Representatives of Complex Moduli Classes

## Problem Statement

> [!question] Original Exercise 7.9.1
> Show that the intersection of an equivalence class in $S_1(N)_{\mathrm{alg},\mathbb C}$ with $S_1(N)_{\mathrm{alg}}$ is an equivalence class in $S_1(N)_{\mathrm{alg}}$.

> **Context and notation.** $S_1(N)_{\mathrm{alg}}$ consists of enhanced elliptic curves over $\overline{\mathbb Q}$ with a point of exact order $N$; its complex counterpart uses $\mathbb C$.

> [!warning] Source issue
> For an arbitrary complex equivalence class the intersection can be empty: take a transcendental $j$-invariant. The statement is correct for a nonempty intersection, as used in the section. It does not assert that every complex elliptic curve has an algebraic model.

## Hints

> [!hint]- Hint 1
> Compare the coefficients of two short Weierstrass equations under an origin-preserving isomorphism.

> [!hint]- Hint 2
> The scaling parameter has an algebraic fourth or sixth power, so it is algebraic.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Here the algebraic objects have coefficients and marked points in $\overline{\mathbb Q}$; equivalence there is by an origin-preserving isomorphism over $\overline{\mathbb Q}$ carrying the marked point to the marked point. The complex version permits isomorphisms over $\mathbb C$. A complex equivalence class has an algebraic representative only if its invariant is algebraic. Accordingly the precise assertion is about a nonempty intersection, or about the class of an algebraic representative.
>
> Take two algebraic enhanced curves $(E,Q),(E',Q')$ in the intersection. Over $\overline{\mathbb Q}$ put their equations in short form $y^2=4x^3-g_2x-g_3$ and $(y')^2=4(x')^3-g_2'x'-g_3'$. Any origin-preserving complex isomorphism between these short equations is $(x,y)\mapsto(u^2x,u^3y)$ for a nonzero complex $u$, with $g_2'=u^4g_2$, $g_3'=u^6g_3$. This description follows from the pole-order bases $L(2O),L(3O)$ and comparison of the missing mixed and quadratic coefficients. At least one of $g_2,g_3$ is nonzero, since the discriminant is nonzero. Thus either $u^4=g_2'/g_2$ or $u^6=g_3'/g_3$ is algebraic. It follows that $u$ is algebraic. The isomorphism and its inverse are therefore defined over $\overline{\mathbb Q}$. It still carries $Q$ to $Q'$. Hence any two elements in the nonempty intersection are algebraically equivalent, and conversely every algebraically equivalent element is complex equivalent. This proves exactly one algebraic equivalence class.
>
> A complex elliptic curve with transcendental $j$ has no algebraic representative, so its intersection is empty. The formulation is used in the section for classes admitting algebraic representatives.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 310 / PDF p. 323. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
