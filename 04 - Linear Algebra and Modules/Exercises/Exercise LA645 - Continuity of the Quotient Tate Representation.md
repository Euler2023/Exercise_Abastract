---
title: "Exercise LA645: Continuity of the Quotient Tate Representation"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.5, Exercise 9.5.1, printed p. 402, PDF p. 414"
source_refs:
  - "S7/ch-9/sec-5/ex-1"
created: 2026-10-28
---

# Exercise LA645: Continuity of the Quotient Tate Representation

## Problem Statement

> [!question] Original Exercise 9.5.1
> Establish (9.16). (A hint for this exercise is at the end of the book.)

> **Referenced context.** Writing $g$ for the genus of $X_1(N)$, $d=[K_f:\mathbb Q]$, and $U(n,r)=\ker(\mathrm{GL}_{2r}(\mathbb Z_\ell)\to\mathrm{GL}_{2r}(\mathbb Z/\ell^n\mathbb Z))$, formula (9.16) is
> $$
> \rho_{X_1(N),\ell}^{-1}(U(n,g))\subseteq\rho_{A_f,\ell}^{-1}(U(n,d)).
> $$

## Hints

> [!hint]- Hint 1
> The map from the Jacobian to $A_f$ is surjective on every finite torsion group by Lemma 9.5.2.

> [!hint]- Hint 2
> Acting trivially modulo $\ell^n$ on the source torsion forces trivial action on its quotient.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $J=\operatorname{Pic}^0(X_1(N))$ and $q:J\to A_f$ be the quotient map. Lemma 9.5.2 gives a Galois-equivariant surjection $q_n:J[\ell^n]\twoheadrightarrow A_f[\ell^n]$ for every $n$. An element $\sigma$ in the left side of (9.16) acts as identity on $J[\ell^n]$. For any $y\in A_f[\ell^n]$, choose $x\in J[\ell^n]$ with $q_n(x)=y$. Then
> $$
> y^\sigma=q_n(x)^\sigma=q_n(x^\sigma)=q_n(x)=y.
> $$
> Thus it acts trivially on $A_f[\ell^n]$, which is precisely membership in the right side of (9.16). This proves the containment. The left side is open because the Jacobian Tate representation is continuous. The right side is a subgroup containing that open subgroup and hence is itself open, being a union of its open cosets. As the congruence kernels form an identity-neighborhood basis, the identity-neighborhood criterion proves continuity of $\rho_{A_f,\ell}$.
>
> The argument uses finite torsion quotients directly. It requires neither choosing compatible preimages across all $n$ nor an unproved assertion that inverse limits preserve arbitrary surjections.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quotient Modules|Quotient Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Abelian Varieties|Abelian Varieties]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced formula:** (9.16), printed p. 400, PDF p. 412, directly checked. It is a congruence-kernel containment, not the later rank-two freeness lemma.
- **Imported input:** Lemma 9.5.2 gives Galois-equivariant surjectivity on finite torsion; continuity of the Jacobian representation was already established in Section 9.5.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
