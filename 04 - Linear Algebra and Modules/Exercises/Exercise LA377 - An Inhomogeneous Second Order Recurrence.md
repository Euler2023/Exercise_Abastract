---
title: "Exercise LA377: An Inhomogeneous Second Order Recurrence"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, Algebraic Extensions, Exercise 32, printed p. 257, PDF p. 272"
created: 2026-09-06
---

# Exercise LA377: An Inhomogeneous Second Order Recurrence

## Problem Statement

> [!question] Lang, Chapter V, Exercise 32
> Let $d=2$ for simplicity. Given $a_0,a_1,u,v,w,t\in K$, we want to find the solutions of the system
> $$
> a_n=ua_{n-1}-va_{n-2}-t^nw\qquad(n\ge2).
> $$
> Let $\alpha_1,\alpha_2$ be the root of the characteristic polynomial, that is
> $$
> 1-uX+vtX^2=(1-\alpha_1X)(1-\alpha_2X).
> $$
> Assume that $\alpha_1,\alpha_2$ are distinct, and also distinct from $t$. Let
> $$
> F(X)=\sum_{n=0}^{\infty}a_nX^n.
> $$
> (a) Show that there exist elements $A,B,C$ of $K$ such that
> $$
> F(X)=\frac{A}{1-\alpha_1X}+\frac{B}{1-\alpha_2X}+\frac{C}{1-tX}.
> $$
> (b) Show that there is a unique solution to the difference equation given by
> $$
> a_n=A\alpha_1^n+B\alpha_2^n+Ct^n\qquad(n\ge0).
> $$

> [!warning] Source issue
> The printed factorization contains $vtX^2$, while the recurrence requires $vX^2$. The solution follows the recurrence and visibly corrects this coefficient. The assertion $A,B,C\in K$ also requires $\alpha_1,\alpha_2\in K$; otherwise the displayed decomposition is over a splitting field.

## Hints

> [!hint]- Hint 1
> The recurrence gives denominator $1-uX+vX^2$, with no extra $t$ multiplying $v$.

> [!hint]- Hint 2
> Find a particular solution $Ct^n$, then match the two initial values.

## Solution

> [!success]- Solution and proof status
> Use the corrected characteristic relation
> $$
> 1-uX+vX^2=(1-\alpha_1X)(1-\alpha_2X),
> $$
> equivalently $\alpha_1+\alpha_2=u$, $\alpha_1\alpha_2=v$. Work over a field $L$ containing $\alpha_1,\alpha_2$, and assume these are distinct from each other and from $t$. If both roots are in $K$, all constants below lie in $K$.
>
> Put
> $$
> D=(t-\alpha_1)(t-\alpha_2)=t^2-ut+v\ne0,\qquad
> C=-\frac{wt^2}{D}.
> $$
> The sequence $Ct^n$ satisfies
> $$
> Ct^n-uCt^{n-1}+vCt^{n-2}=-wt^n\qquad(n\ge2).
> $$
> For $t\ne0$ this follows by factoring $Ct^{n-2}D$. For $t=0$, $C=0$ and both sides vanish for $n\ge2$.
>
> Let $s=a_0-C$ and $r=a_1-Ct$. Define
> $$
> A=\frac{r-\alpha_2s}{\alpha_1-\alpha_2},\qquad
> B=\frac{\alpha_1s-r}{\alpha_1-\alpha_2}.
> $$
> Then $A+B=s$ and $A\alpha_1+B\alpha_2=r$. The root sequences solve the homogeneous recurrence, so
> $$
> a_n=A\alpha_1^n+B\alpha_2^n+Ct^n
> $$
> satisfies both the given recurrence and its initial values. Every subsequent term is determined by the two previous ones, proving uniqueness and part (b).
>
> Summing geometric series proves (a):
> $$
> F(X)=\frac{A}{1-\alpha_1X}+\frac{B}{1-\alpha_2X}+\frac{C}{1-tX}.
> $$
> This includes a zero root using $0^0=1$ and a constant partial-fraction term. Directly from the recurrence one also obtains
> $$
> F(X)=
> \frac{(a_0+(a_1-ua_0)X)(1-tX)-wt^2X^2}
> {(1-uX+vX^2)(1-tX)}.
> $$
> This expression has coefficients in $K$, even when the individual partial-fraction constants lie in $L$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Vandermonde Matrices and Polynomial Interpolation|Vandermonde Matrices and Polynomial Interpolation]]
- [[02 - Ring Theory/Concepts/Partial Fraction Decomposition|Partial Fraction Decomposition]]
- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]

## Notes

- **Counterexample to unrestricted $A,B,C\in K$:** For $K=\mathbb Q$, $u=0$, $v=-2$, $t=1$, $w=0$, $a_0=0$, $a_1=1$, the corrected roots are $\pm\sqrt2$ and the constants are $A=1/(2\sqrt2)$, $B=-1/(2\sqrt2)$, $C=0$. They are not all rational.
- **Source context:** The closing parenthesis points to Lang's *Introduction to Modular Forms* (1976), Ch. XII, §2, for an application. That application is not part of this exercise or its proof.

- **Source status:** The numbered statement, multipart structure, and notation were checked against the original PDF [S2, Ch. V, Ex. 32, printed p. 257, PDF p. 272]. The solution is an independent derivation except where a source-contained argument, external input, or conjectural boundary is explicitly identified.
