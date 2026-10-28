---
title: "Exercise LA602: An Isomorphism of Prime Level Cusp Spaces"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.5, Exercise 3.5.5, printed p. 89, PDF p. 103"
source_refs:
  - "S7/ch-3/sec-5/ex-5"
created: 2026-10-28
---

# Exercise LA602: An Isomorphism of Prime Level Cusp Spaces

## Problem Statement

> [!question] Original Exercise 3.5.5
> Combine Exercise 3.1.4 and Theorem 3.5.2 to show that letting $k=p+1$ for $p$ an odd prime, $S_k(\operatorname{SL}_2(\mathbb Z))$ and $S_2(\Gamma_0(p))$ are isomorphic as complex vector spaces. What is the isomorphism when $p=11$? (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> The second space has dimension $g(X_0(p))$. Compare the two formulas in the four prime residue classes modulo twelve.

> [!hint]- Hint 2
> At $p=11$ both spaces are one-dimensional, with explicit discriminant and eta-product generators.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The weight-two cusp-form/differential correspondence gives $\dim S_2(\Gamma_0(p))=g(X_0(p))$. For $p>3$, the prime-level genus calculation gives
> $$
> g(X_0(p))=(p+1)/12-\varepsilon_2/4-\varepsilon_3/3,
> $$
> where $\varepsilon_2=2$ or $0$ according as $p\equiv1$ or $3\pmod4$, and $\varepsilon_3=2$ or $0$ according as $p\equiv1$ or $2\pmod3$. Substitution yields
>
> | $p$ | $g(X_0(p))$ | $\dim S_{p+1}(\operatorname{SL}_2(\mathbb Z))$ |
> |---|---|---|
> | $12m+1$ | $m-1$ | $m-1$ |
> | $12m+5$ | $m$ | $m$ |
> | $12m+7$ | $m$ | $m$ |
> | $12m+11$ | $m+1$ | $m+1$ |
>
> The last column follows directly from Theorem 3.5.2 with $k=p+1$. For $p=3$, both dimensions are zero ($X_0(3)$ has genus zero and $S_4=0$). Equal finite dimensions prove the asserted complex-linear isomorphism by sending a basis of one space to a basis of the other. The assertion specifies no canonical map.
>
> At $p=11$, $S_{12}=\mathbb C\eta(\tau)^{24}$ and $S_2(\Gamma_0(11))=\mathbb C\eta(\tau)^2\eta(11\tau)^2$; the eta-product modularity is Proposition 3.2.2, and both nonzero generators have leading term $q$. A normalization-preserving isomorphism is
> $$
> c\eta(\tau)^{24}\longmapsto c\eta(\tau)^2\eta(11\tau)^2.
> $$
> Equivalently, for the book's normalization $\Delta=(2\pi)^{12}\eta^{24}$, send $c\Delta$ to $c(2\pi)^{12}\eta(\tau)^2\eta(11\tau)^2$. Any nonzero scalar multiple is also an isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 89 / PDF 103. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
