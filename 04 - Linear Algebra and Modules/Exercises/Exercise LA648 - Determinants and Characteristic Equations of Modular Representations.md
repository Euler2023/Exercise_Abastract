---
title: "Exercise LA648: Determinants and Characteristic Equations of Modular Representations"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.6, Exercise 9.6.3, printed p. 409, PDF p. 421"
source_refs:
  - "S7/ch-9/sec-6/ex-3"
created: 2026-10-28
---

# Exercise LA648: Determinants and Characteristic Equations of Modular Representations

## Problem Statement

> [!question] Original Exercise 9.6.3
> (a) Let $\rho_{f,\lambda}$ be the representation of Theorem 9.6.5. Use its characteristic equation at $p\nmid\ell N$ to show $\det\rho_{f,\lambda}=\chi\chi_\ell^{k-1}$.
>
> (b) Conversely, suppose the theorem stated this determinant identity and that $\rho_{f,\lambda}(\operatorname{Frob}_p)$ satisfies the displayed equation for $p\nmid\ell N$. Show that equation is its characteristic equation.

## Hints

> [!hint]- Hint 1
> Continuous characters agreeing on almost all Frobenius elements agree everywhere.

> [!hint]- Hint 2
> Subtract Cayley–Hamilton from the given quadratic equation and use invertibility.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a).** The characteristic polynomial at a good prime is $X^2-a_p(f)X+\chi(p)p^{k-1}$. Thus the determinant there is $\chi(p)p^{k-1}$. On the other hand the Galois character associated to the Dirichlet character has value $\chi(p)$, and $\chi_\ell(\operatorname{Frob}_p)=p$. The two continuous characters therefore agree on the dense set of almost-all-prime Frobenius elements. Since the coefficient field is Hausdorff, they agree on the whole group.
>
> **(b).** Put $A=\rho_{f,\lambda}(\operatorname{Frob}_p)$, $a=a_p(f)$ and $D=\chi(p)p^{k-1}$. The asserted equation is $A^2-aA+DI=0$. Cayley–Hamilton independently gives $A^2-(\operatorname{tr}A)A+(\det A)I=0$. The determinant identity makes $\det A=D$. Subtraction yields $(\operatorname{tr}A-a)A=0$. Since $A$ is invertible, $\operatorname{tr}A=a$. Therefore its characteristic polynomial is exactly $X^2-aX+D$. This proof includes the case of a scalar Frobenius matrix; merely knowing that the minimal polynomial divides the quadratic would not suffice.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Referenced context:** Theorem 9.6.5 uses the weight-$k$ polynomial $X^2-a_p(f)X+\chi(p)p^{k-1}$. Here $\chi$ on the Galois group means its associated finite-order character.
- **Imported input:** Chebotarev density for (a); Cayley–Hamilton for (b).
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
