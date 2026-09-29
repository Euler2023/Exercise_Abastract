---
title: "Exercise LA454: Parallelogram Law and the Scalar Linearity Gap"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - quadratic-maps
  - polarization
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 12, printed p. 598, PDF p. 613"
created: 2026-09-29
---

# Exercise LA454: Parallelogram Law and the Scalar Linearity Gap

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 12
> Let $R$ be a commutative ring, let $E,F$ be $R$-modules, and let $f:E\to F$ be a mapping. Assume that multiplication by $2$ in $F$ is an invertible map. Show that $f$ is homogeneous quadratic if and only if $f$ satisfies the **parallelogram law**:
>
> $$
> f(x+y)+f(x-y)=2f(x)+2f(y)
> $$
>
> for all $x,y\in E$.

> [!warning] Source issue: scalar compatibility is missing
> In XV §2, “quadratic” explicitly means $R$-quadratic, with an $R$-bilinear associated map. The displayed law only forces biadditivity, or $\mathbb Z$-bilinearity. For $R=E=F=\mathbb C$, the map $f(z)=|z|^2$ satisfies the law but is not homogeneous complex quadratic. The correct unconditional converse is the existence of a symmetric biadditive $B$ with $f(x)=B(x,x)$. The original $R$-quadratic conclusion holds exactly when this polarization is additionally $R$-bilinear; in particular it holds for $R=\mathbb Z$.

## Hints

> [!hint]- Hint 1
> Substitute $(x,y)=(0,0)$, $(0,y)$, and $(x,x)$ to obtain $f(0)=0$, $f(-x)=f(x)$, and $f(2x)=4f(x)$.

> [!hint]- Hint 2
> Define $B(x,y)=(f(x+y)-f(x-y))/4$. Apply the parallelogram law to $(x+y,z)$ and $(x-y,z)$, subtract, and then interchange $x,z$ to prove additivity of $B$.

## Solution

> [!success]- Independent proof of the corrected statement and counterexample to the printed converse
> **Necessity.** If $f(x)=B(x,x)$ for a symmetric $R$-bilinear map $B$, expand $B(x+y,x+y)$ and $B(x-y,x-y)$. The mixed terms cancel and give the parallelogram identity. The same argument works for any symmetric biadditive $B$.
>
> **Elementary consequences of the law.** Since multiplication by $2$ is injective on $F$, substitution $x=y=0$ gives $2f(0)=4f(0)$ and hence $f(0)=0$. Taking $x=0$ then gives $f(-y)=f(y)$, while $y=x$ gives $f(2x)=4f(x)$.
>
> **Polarization.** Multiplication by $4$ is an automorphism of $F$, so set
>
> $$
> B(x,y)=\frac{f(x+y)-f(x-y)}4.
> $$
>
> Evenness of $f$ gives $B(y,x)=B(x,y)$ and $B(-x,y)=-B(x,y)$. Apply the parallelogram law twice to obtain
>
> $$
> \begin{aligned}
> f(x+y+z)+f(x+y-z)&=2f(x+y)+2f(z),\\
> f(x-y+z)+f(x-y-z)&=2f(x-y)+2f(z).
> \end{aligned}
> $$
>
> Subtracting and dividing by $4$ yields
>
> $$
> B(x+z,y)+B(x-z,y)=2B(x,y).
> $$
>
> Interchange $x,z$ in this identity and use oddness to get
>
> $$
> B(x+z,y)-B(x-z,y)=2B(z,y).
> $$
>
> Adding the two equations and cancelling multiplication by $2$ proves $B(x+z,y)=B(x,y)+B(z,y)$. Symmetry gives additivity in the second variable. Moreover,
>
> $$
> B(x,x)=\frac{f(2x)-f(0)}4=f(x).
> $$
>
> Thus $B$ is a symmetric biadditive polarization. The parallelogram law also gives the equivalent expression
>
> $$
> 2B(x,y)=f(x+y)-f(x)-f(y).
> $$
>
> Any symmetric biadditive map with diagonal $f$ satisfies this last identity by expansion. Since multiplication by $2$ is injective, $B$ is unique.
>
> **Why $R$-bilinearity does not follow.** Let $R=E=F=\mathbb C$ and $f(z)=|z|^2$. Direct expansion proves the parallelogram law, and multiplication by $2$ is invertible. If $f(z)=B(z,z)$ with $B$ complex bilinear, then
>
> $$
> f(i)=B(i,i)=i^2B(1,1)=-f(1)=-1,
> $$
>
> whereas $f(i)=1$. Its actual polarization is $B(z,w)=\operatorname{Re}(z\overline w)$, which is real bilinear but not complex bilinear.
>
> Finally, the unique polarization is $R$-bilinear if and only if $B(rx,y)=rB(x,y)$ for every $r\in R$ and $x,y\in E$; symmetry supplies scalar compatibility in the other variable. Adding precisely this condition gives the claimed homogeneous $R$-quadratic conclusion.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Quadratic Maps and Polarization|Quadratic Maps and Polarization]]
- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- **Source and proof status:** The exercise was checked on [S2, Ch. XV, Ex. 12, printed p. 598, PDF p. 613]. Lang's explicit $R$-quadratic definition and Propositions 2.1–2.2 were checked on printed pp. 574-575 / PDF pp. 589-590. The counterexample and corrected converse are independent derivations, not an authorial erratum.
- **Scope:** No topology or finite-dimensionality is used. Bijectivity of multiplication by $2$ on $F$ suffices; it is not necessary that $2$ be a unit of $R$. Biadditivity means linearity over the underlying integer-module structures.
