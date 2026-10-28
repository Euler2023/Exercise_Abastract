---
title: "Exercise LA607: Primitive Columns and the Action on Cusps"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.8, Exercise 3.8.1, printed p. 106, PDF p. 120"
source_refs:
  - "S7/ch-3/sec-8/ex-1"
created: 2026-10-28
---

# Exercise LA607: Primitive Columns and the Action on Cusps

## Problem Statement

> [!question] Original Exercise 3.8.1
> (a) In the proof of Lemma3.8.1 show that $(pa+qc)/(ra+tc)$ is in lowest terms. (A hint for this exercise is at the end of the book.)
>
> (b) Complete the proof of Lemma3.8.1.
>
> The lemma states that if $s=a/c$, $s'=a'/c'$ are primitive fractions (including infinity), and $\gamma=\begin{pmatrix}p&q\\r&t\end{pmatrix}\in\operatorname{SL}_2(\mathbb Z)$, then $s'=\gamma(s)$ if and only if $(a',c')^t=\pm\gamma(a,c)^t$.

## Hints

> [!hint]- Hint 1
> Apply the integral inverse matrix to the transformed column.

> [!hint]- Hint 2
> A primitive column representing infinity is $(1,0)^t$ or $(-1,0)^t$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Put $A=pa+qc$, $C=ra+tc$. Since $pt-qr=1$,
> $$
> a=tA-qC,\qquad c=-rA+pC.
> $$
> Any common divisor of $A,C$ divides $a,c$, so $\gcd(A,C)=1$. Conversely their integer linear combinations show that no primitivity is lost. This includes $C=0$, when necessarily $A=\pm1$.
>
> **(b)** If $c,c'$ are nonzero and $C$ is nonzero, equality of the reduced fractions $a'/c'=A/C$ implies their primitive columns agree up to a common sign: cross-multiplication and coprimality force the proportionality to be an integer unit. If $c=0$, then $a=\pm1$ and the transformed column is $a(p,r)^t$. Its represented point is $p/r$ when $r\ne0$, or infinity when $r=0$; in both cases the primitive representative of that point is unique up to sign. If $c'=0$, the equality $s'=\gamma(s)$ says that the denominator $C$ vanishes, and then primitivity gives $A=\pm1$ and $(a',0)^t=\pm(A,0)^t$. These observations cover also $c=c'=0$. The converse in every case follows because multiplying a column by $-1$ leaves its projective point unchanged. Thus the equivalence holds for all points of $\mathbb Q\cup\{\infty\}$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 106 / PDF 120. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
