---
title: "Exercise Gal214: The Constant Field of the Full Level Modular Curve"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 7, Section 7.7, Exercise 7.7.3, printed p. 299, PDF p. 312"
source_refs:
  - "S7/ch-7/sec-7/ex-3"
created: 2026-10-28
---

# Exercise Gal214: The Constant Field of the Full Level Modular Curve

## Problem Statement

> [!question] Original Exercise 7.7.3
> The relevant field for the algebraic model of $X(N)$ is
> $$
> K=\mathbb Q(j,f_{1,0},f_{0,1}),
> $$
> analogous to the complex function field $\mathbb C(j,f_{1,0},f_{0,1})$. Show that its corresponding subgroup $K_{\rm grp}$ of $H_{\mathbb Q}$ satisfies $\rho(K_{\rm grp})=\{\pm I\}$, so $K\cap\overline{\mathbb Q}=\mathbb Q(\mu_N)$. The algebraic model is the curve $X(N)_{\rm alg}$ over $\mathbb Q(\mu_N)$ with function field $K$. Connect this to the complex modular curve $X(N)$.

> [!warning] Source issue
> For $N>2$ the printed arithmetic field has the four independent sign matrices as stabilizer, not just $\{\pm I\}$. Its constant field is the maximal real cyclotomic subfield. The intended full-level assertion is true after adjoining $x(P+Q)$ or $\zeta_N$, equivalently after adjoining all torsion $x$-coordinates. The solution proves both the actual statement and this corrected version, and checks $N=2,3$ explicitly.

## Hints

> [!hint]- Hint 1
> Fixing the two $x$-coordinates allows the signs of $P$ and $Q$ to vary independently in $GL_2$.

> [!hint]- Hint 2
> Test $\operatorname{diag}(1,-1)$, then add the $x$-coordinate of $P+Q$.

> [!hint]- Hint 3
> Compute the constant field using the determinant action on $\mu_N$.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
>
> Let $P,Q$ be the universal basis and $L=\mathbb Q(j,E_j[N])$. The arithmetic group is $GL_2(\mathbb Z/N\mathbb Z)$ and $f_{1,0}=x(P)$, $f_{0,1}=x(Q)$.
>
> **The actual printed field.** An automorphism fixes $x(P)$ exactly when it sends $P$ to $P$ or $-P$. Likewise fixing $x(Q)$ permits an independent sign. Thus its stabilizer is
> $$
> D=\{\operatorname{diag}(\varepsilon_1,\varepsilon_2):\varepsilon_1,\varepsilon_2\in\{\pm1\}\}.
> $$
> For $N>2$ these are four distinct matrices. The diagonal matrix $\operatorname{diag}(1,-1)$ already contradicts the claimed two-element stabilizer.
>
> The constants of $L$ are $\mathbb Q(\mu_N)$, and its Galois action is through the determinant. Therefore
> $$
> K\cap\overline{\mathbb Q}
> =\mathbb Q(\mu_N)^{\det D}
> =\mathbb Q(\zeta_N+\zeta_N^{-1})
> $$
> for $N>2$, the maximal real cyclotomic subfield, because $\det D=\{\pm1\}$. For $N=3$ this is $\mathbb Q$, whereas the printed claim would give the quadratic field $\mathbb Q(\sqrt{-3})$. For $N=2$, the two signs coincide modulo $2$ and both the actual and claimed constant fields are $\mathbb Q$.
>
> **A corrected full-level field.** Define
> $$
> K^+=\mathbb Q(j,x(P),x(Q),x(P+Q)).
> $$
> If a diagonal sign matrix fixes the third coordinate, then $\varepsilon_1P+\varepsilon_2Q=\pm(P+Q)$. Comparing independent basis coefficients forces $\varepsilon_1=\varepsilon_2$ modulo $N$. Thus the stabilizer is exactly $\{\pm I\}$. It fixes every torsion $x$-coordinate and conversely, so
> $$
> K^+=\mathbb Q(j,x(E_j[N]))=L^{\{\pm I\}},\qquad
> K^+\cap\overline{\mathbb Q}=\mathbb Q(\mu_N).
> $$
> Equivalently $K^+=K(\zeta_N)$: intersecting $D$ with the determinant-one subgroup leaves precisely $\{\pm I\}$.
>
> The **Curves–Fields Correspondence** applied over $\mathbb Q(\mu_N)$ now gives the corrected full-level curve with function field $K^+$. After choosing an embedding of the constants into $\mathbb C$,
> $$
> \mathbb C K^+
> =\mathbb C(j,x(E_j[N]))
> =\mathbb C(X(N))
> $$
> by Proposition 7.5.2. Thus its complex curve is isomorphic to the modular curve $X(N)$. Extending constants also removes the distinction between $K$ and $K^+$, since $\zeta_N\in\mathbb C$; the printed complex analogy therefore does not detect the arithmetic missing generator.

## Related Concepts

- [[05 - Galois Theory/Concepts/Fundamental Theorem|Fundamental Theorem]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 299 / PDF p. 312. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
