---
title: "Exercise AG128: The General Weierstrass Addition Law"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 8, Section 8.1, Exercise 8.1.4, printed p. 320, PDF p. 333"
source_refs:
  - "S7/ch-8/sec-1/ex-4"
created: 2026-10-28
---

# Exercise AG128: The General Weierstrass Addition Law

## Problem Statement

> [!question] Original Exercise 8.1.4
> (a) Show that the casewise definitions of $\lambda$ and $\mu$ make $y=\lambda x+\mu$ the secant line through $P,Q$ when $P\ne Q$ and the tangent when $P=Q$.
>
> (b) Show that the geometric and algebraic descriptions (8.7),(8.8) of the group law agree.
>
> (c) Multiply the numerator and denominator of the secant expression for $\lambda$ by $y_Q+y_P+a_1x_P+a_3$ and use (8.1) to obtain a new expression when this factor is nonzero. Show that it agrees with the old $\lambda$ when $x_P=x_Q$, suitably giving $\infty$ when $P=-Q$. Similarly derive a new expression for $\mu$.

> **Context and notation.** The general equation (8.1) is $y^2+a_1xy+a_3y=x^3+a_2x^2+a_4x+a_6$. Set $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6-a_1a_3a_4+a_2a_3^2+4a_2a_6-a_4^2$, $c_4=b_2^2-24b_4$, $c_6=-b_2^3+36b_2b_4-216b_6$, $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$, and $j=c_4^3/\Delta$ when $\Delta\ne0$. These definitions and equations (8.2)–(8.5) are on printed pp. 314–315 / PDF pp. 327–328. The source (8.7) says $P+Q=(x_R,-y_R-a_1x_R-a_3)$ for the third collinear point $R$. Equation (8.8) defines $r=\lambda^2+a_1\lambda-a_2-x_P-x_Q$, $s=-(\lambda+a_1)r-\mu-a_3$. The casewise secant/tangent formulas are reproduced and derived in the solution, from printed p. 316 / PDF p. 329.

## Hints

> [!hint]- Hint 1
> Use implicit differentiation and the equality $\mu=y_P-\lambda x_P$.

> [!hint]- Hint 2
> After substituting the line, read the sum of the three roots from the quadratic coefficient.

## Solution

> [!success]- Solution
> **Proof provenance:** Independent derivation. Imported results are named at their point of use.
>
> Write $f(x)=x^3+a_2x^2+a_4x+a_6$, $D_P=2y_P+a_1x_P+a_3$. Points at infinity and vertical lines are interpreted projectively; the following finite formulas apply where their denominators are nonzero.
>
> (a) For $x_P\ne x_Q$, solving the two linear incidence equations gives $\lambda=(y_Q-y_P)/(x_Q-x_P)$ and $\mu=y_P-\lambda x_P=(y_Px_Q-y_Qx_P)/(x_Q-x_P)$. Implicit differentiation of $y^2+a_1xy+a_3y=f(x)$ at $P$ gives
> $$
> \lambda=\frac{3x_P^2+2a_2x_P+a_4-a_1y_P}{D_P}.
> $$
> The tangent intercept $y_P-\lambda x_P$ simplifies, using the curve equation, to $(-x_P^3+a_4x_P+2a_6-a_3y_P)/D_P$. These are exactly the two source formulas. If $D_P=0$, nonsingularity forces the other partial derivative nonzero, and the tangent is vertical.
>
> (b) Substitute $y=\lambda x+\mu$ into the curve equation and move to a monic cubic in $x$. Its quadratic coefficient is $a_2-\lambda^2-a_1\lambda$. The roots, with intersection multiplicity, are $x_P,x_Q,x_R$, where $R$ is the third intersection. Hence
> $$
> x_R=\lambda^2+a_1\lambda-a_2-x_P-x_Q.
> $$
> Negation fixes $x_R$ and sends its ordinate to $-y_R-a_1x_R-a_3$. Since $y_R=\lambda x_R+\mu$, the sum $P+Q=-R$ has coordinates $r=x_R$, $s=-(\lambda+a_1)r-\mu-a_3$, as in (8.8). A vertical line has third intersection infinity, giving $P+(-P)=0_E$.
>
> (c) Set $B=y_Q+y_P+a_1x_P+a_3$. Subtract the two curve equations and factor the difference to obtain
> $$
> (y_Q-y_P)B=(x_Q-x_P)\bigl(x_Q^2+x_Px_Q+x_P^2+a_2(x_Q+x_P)+a_4-a_1y_Q\bigr).
> $$
> Thus, for $B\ne0$,
> $$
> \lambda=\frac{x_Q^2+x_Px_Q+x_P^2+a_2(x_Q+x_P)+a_4-a_1y_Q}{B}.
> $$
> At $Q=P$ the numerator and denominator become the tangent numerator and $D_P$. At $x_Q=x_P$ with $Q=-P$, $B=0$; the secant is vertical by the projective line equation through the two points. The new quotient can have $0/0$ even here: on $y^2=x^3+1$, the pair $(0,1),(0,-1)$ gives both numerator and denominator zero. Thus the phrase “suitably giving infinity” must be interpreted using the projective secant line or its limiting direction, rather than literal division. At a point of order two the tangent is vertical since nonsingularity makes the $x$ derivative nonzero.
>
> Finally $\mu=y_P-x_P\lambda$ and $y_P^2+a_1x_Py_P+a_3y_P=f(x_P)$ give
> $$
> \mu=\frac{y_Py_Q-x_Px_Q(x_P+x_Q+a_2)+a_1x_Py_Q+a_6}{B}.
> $$
> Its diagonal value is the tangent intercept already computed. Together these expressions explain the two source cases from a single rational function on the appropriate open set.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Reduction mod p|Reduction mod p]]

## Notes

- **Source status:** The complete numbered exercise and its subparts were checked against the original PDF rendered at 200 dpi, printed p. 320 / PDF p. 333. The source assigns this exercise; its appearance there is not a source proof.
- **Proof status:** The derivation above is written for this vault; each imported structural result has the scope stated where it is used.
- **Learning status:** The status remains not-started; a supplied solution does not record learning progress.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
