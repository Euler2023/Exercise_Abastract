---
title: "Exercise R238: Davenport Bounds and Generalized Polynomial Powers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IV, Polynomials, Exercise 13, printed p. 215, PDF p. 230"
created: 2026-09-06
---

# Exercise R238: Davenport Bounds and Generalized Polynomial Powers

## Problem Statement

> [!question] Lang, Chapter IV, Exercise 13
> Polynomials are over an algebraically closed field of characteristic $0$.
>
> (a) Prove Davenport's theorem: let $f(t),g(t)$ be polynomials such that $f^3-g^2\ne0$. Then
> $$
> \deg(f^3-g^2)\ge\tfrac12\deg f+1.
> $$
> Equivalently, if $h=f^3-g^2\ne0$, then $\deg f\le2\deg h-2$. First assume $f,g$ relatively prime and apply Mason's theorem. In general proceed as follows.
>
> (b) Let $A,B,f,g$ be polynomials such that $Af,Bg$ are relatively prime and nonzero. Put $h=Af^3+Bg^2$. Then
> $$
> \deg f\le\deg A+\deg B+2\deg h-2.
> $$
> This follows from Mason's theorem. For the general case of (a), the source suggests repeatedly factoring out common factors, noting that three steps were needed in its reduction.
>
> (c) Generalize (b) to $f^m-g^n$ for arbitrary positive integers $m,n$.

> [!warning] Source issue / scope clarification
> The exercise omits nonconstant hypotheses. In (a), $f=1,g=2$ gives $\deg(f^3-g^2)=0$, contradicting the printed bound. The chapter's Davenport statement requires nonconstant polynomials [S2, Ch. IV, §7, printed p. 195, PDF p. 210]. We prove (a) for nonconstant $f,g$. In (b), also require $h\ne0$ and that $Af^3,Bg^2$ are not both constant; otherwise the degree expression can be undefined or false. These conditions are explicit in the solution.

## Hints

> [!hint]- Hint 1
> For (b), apply Mason-Stothers to $Af^3$, $Bg^2$, and $h$, bounding the number of distinct roots by the sum of degrees of $A,B,f,g,h$.

> [!hint]- Hint 2
> For the common-factor case of (a), the identity $3f'h-fh'=-g(3f'g-2fg')$ gives a short alternative to repeated factor extraction.

## Solution

> [!success]- Solution
> ### Approach
> For (b), apply Mason-Stothers to $Af^3$, $Bg^2$, and $h$, bounding the number of distinct roots by the sum of degrees of $A,B,f,g,h$.
>
> ### Proof
> We use the corrected hypotheses in the warning.
>
> **Mason-Stothers input.** For pairwise coprime nonzero polynomials $P,Q,H$ with $P+Q=H$, not all constant, one has
> $$
> \max(\deg P,\deg Q,\deg H)\le\deg\operatorname{rad}(PQH)-1.
> $$
> The precise theorem, its characteristic boundary, and a proof are in the linked concept note.
>
> **(b)** Put $a=\deg A$, $b=\deg B$, $x=\deg f$, $y=\deg g$, and $z=\deg h$. The assumption $\gcd(Af,Bg)=1$ makes $Af^3$, $Bg^2$, and $h$ pairwise coprime. Their distinct roots all occur among roots of $ABfgh$, so Mason-Stothers gives
> $$
> a+3x\le a+b+x+y+z-1,\qquad
> b+2y\le a+b+x+y+z-1.
> $$
> Thus $2x\le b+y+z-1$ and $y\le a+x+z-1$. Substitution yields $x\le a+b+2z-2$.
>
> **(a), coprime case.** Apply (b) with $A=1,B=-1$. This gives exactly the claimed bound.
>
> **(a), arbitrary common factors.** Here is an independent alternative to the source's repeated-factor hint. Set $x=\deg f\ge1$, $y=\deg g$, $z=\deg h$, and
> $$
> W=3f'g-2fg'.
> $$
> If $3x\ne2y$, the leading terms cannot cancel, so $z=\max(3x,2y)\ge3x\ge x/2+1$.
>
> Suppose $3x=2y$. If $W\ne0$, direct differentiation gives $3f'h-fh'=-gW$. The left side has degree at most $x+z-1$; the right side has degree $y+\deg W\ge y$. Therefore $z\ge y-x+1=x/2+1$.
>
> If $W=0$, then the derivative of $f^3/g^2$ is zero. A rational function with zero derivative in characteristic $0$ is constant: writing it as coprime $P/Q$, $P'Q=PQ'$ gives $P\mid P'$, so $P'=0$ by degrees, and similarly $Q'=0$. Thus $f^3=Cg^2$ for $C\in k^\times$. Since $h\ne0$, $C\ne1$; hence $h=(C-1)g^2$ and $z=2y=3x$, again sufficient.
>
> **(c)** More generally assume $Af,Bg$ are coprime and nonzero, $h=Af^m+Bg^n\ne0$, and $Af^m,Bg^n$ are not both constant. With the same degree notation Mason gives
> $$
> (m-1)x\le b+y+z-1,\qquad
> (n-1)y\le a+x+z-1.
> $$
> Multiplying and eliminating the other variable yields
> $$
> \begin{aligned}
> (mn-m-n)x&\le a+(n-1)b+n(z-1),\\
> (mn-m-n)y&\le(m-1)a+b+m(z-1).
> \end{aligned}
> $$
> These inequalities hold for all positive $m,n$; they give genuine upper bounds on $x,y$ when $mn>m+n$. For coprime $f,g$ and $h=f^m-g^n$, use $A=1,B=-1$, giving $(mn-m-n)\deg f\le n(\deg h-1)$ and its symmetric counterpart. No division by a nonpositive $mn-m-n$ is justified.

## Related Concepts

- [[02 - Ring Theory/Concepts/Mason-Stothers Theorem|Mason-Stothers Theorem]]
- [[02 - Ring Theory/Concepts/Polynomial Derivations|Polynomial Derivations]]
- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]

## Notes

- **Source status:** The complete numbered statement and its subparts were checked against the original PDF at [S2, Ch. IV, Ex. 13, printed p. 215, PDF p. 230]. The solution is independently derived; any imported theorem or corrected hypothesis is identified above.
- **Two printed bounds:** The chapter's Davenport statement prints $\deg(f^3-g^2)\ge\tfrac12\deg f-1$ [S2, Ch. IV, §7, printed p. 195, PDF p. 210], whereas Exercise 13(a) prints the stronger bound with $+1$. The Problem Statement retains the exercise's bound, and the solution proves that stronger version under the nonconstant hypotheses.
