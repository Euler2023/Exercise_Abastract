---
title: "Exercise LA443: Real and Complex Parts of Hermitian Forms"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
  - hermitian-forms
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, Exercise 1, printed pp. 595–596, PDF pp. 610–611"
created: 2026-09-29
---

# Exercise LA443: Real and Complex Parts of Hermitian Forms

## Problem Statement

> [!question] Lang, Chapter XV, Exercise 1
> (a) Let $E$ be a finite dimensional space over the complex numbers, and let $h:E\times E\to\mathbb C$ be a hermitian form. Write
>
> $$
> h(x,y)=g(x,y)+if(x,y)
> $$
>
> where $g,f$ are real valued. Show that $g,f$ are $\mathbb R$-bilinear, $g$ is symmetric, $f$ is alternating.
>
> (b) Let $E$ be finite dimensional over $\mathbb C$. Let $g:E\times E\to\mathbb C$ be $\mathbb R$-bilinear. Assume that for all $x\in E$ the map $y\mapsto g(x,y)$ is $\mathbb C$-linear, and that the $\mathbb R$-bilinear form
>
> $$
> f(x,y)=g(x,y)-g(y,x)
> $$
>
> is real-valued on $E\times E$. Show that there exists a hermitian form $h$ on $E$ and a symmetric $\mathbb C$-bilinear form $\psi$ on $E$ such that $2ig=h+\psi$. Show that $h$ and $\psi$ are uniquely determined.

> [!warning] Source issue: which variable is complex linear
> Lang defines a Hermitian form to be linear in the first variable and conjugate-linear in the second [Ch. XV, §5, printed p. 579, PDF p. 594]. Under that convention, (b) is false as printed: $2ig$ and $\psi$ are linear in the second variable, so their difference $h$ would be both linear and conjugate-linear in that variable, forcing $h=0$. The valid decomposition uses a Hermitian form $H$ **linear in the second variable**, as in the linked vault concept. Equivalently, keeping Lang's convention, the corrected formula is $2ig(x,y)=h(y,x)+\psi(x,y)$. Both the defect and the corrected construction are proved below; the original statement is retained above.

## Hints

> [!hint]- Hint 1: Restrict scalars and split the first variable
> For (a), compare real and imaginary parts in $h(y,x)=\overline{h(x,y)}$. For (b), split the real-linear dependence on $x$ into its complex-linear and conjugate-linear parts.

> [!hint]- Hint 2: Use the reality condition twice
> Put $b(x,y)=(g(x,y)-ig(ix,y))/2$ and $c(x,y)=(g(x,y)+ig(ix,y))/2$. Compare $f(x,y)$ with $f(ix,iy)$ to show that $b$ is symmetric, and then use $f(ix,y)\in\mathbb R$ to show that $c(y,x)=-\overline{c(x,y)}$.

## Solution

> [!success]- Independent solution, including the convention correction
> **(a).** A Hermitian form is additive in each variable and homogeneous for real scalars in either variable. Taking real and imaginary parts therefore makes $g$ and $f$ real bilinear. The identity $h(y,x)=\overline{h(x,y)}$ gives $g(y,x)=g(x,y)$ and $f(y,x)=-f(x,y)$. In particular $2f(x,x)=0$ in $\mathbb R$, so $f(x,x)=0$: $f$ is alternating. This argument works with either Hermitian linearity convention.
>
> **Why (b) fails with Lang's convention.** On $E=\mathbb C$, take $g(x,y)=i\overline{x}y$. It is real bilinear and complex linear in $y$, and
>
> $$
> g(x,y)-g(y,x)=i(\overline{x}y-\overline{y}x)
> =-2\operatorname{Im}(\overline{x}y)\in\mathbb R.
> $$
>
> If the printed decomposition held with a first-variable-linear Hermitian $h$, its second-variable behavior would force $h=0$, as explained in the warning. Then $2ig=-2\overline{x}y$ would have to be complex bilinear, but it is conjugate-linear and nonzero in $x$. This is a counterexample to the literal convention-dependent assertion.
>
> **(b), corrected second-variable-linear version.** Define $b,c$ as in Hint 2. Real bilinearity and $g(x,iy)=ig(x,y)$ show directly that $b$ is complex bilinear, while $c$ is conjugate-linear in $x$ and complex linear in $y$; also $g=b+c$. For example $b(ix,y)=ib(x,y)$ and $c(ix,y)=-ic(x,y)$ follow by substituting $i^2x=-x$.
>
> Since $b(ix,iy)=-b(x,y)$ and $c(ix,iy)=c(x,y)$, we have
>
> $$
> b(x,y)-b(y,x)=\frac{f(x,y)-f(ix,iy)}2\in\mathbb R.
> $$
>
> The expression on the left is complex bilinear. A complex-linear function that is always real valued must vanish: its value and $i$ times its value must both be real. Thus $b(x,y)=b(y,x)$.
>
> Write $u=c(x,y)$ and $v=c(y,x)$. Because the $b$ terms cancel, the two reality conditions become
>
> $$
> f(x,y)=u-v\in\mathbb R,
> \qquad f(ix,y)=-i(u+v)\in\mathbb R.
> $$
>
> Hence $\operatorname{Im}u=\operatorname{Im}v$ and $\operatorname{Re}u=-\operatorname{Re}v$, so $v=-\overline u$. It follows that $H=2ic$ satisfies $H(y,x)=\overline{H(x,y)}$ and is Hermitian with the second-variable-linear convention. Set $\psi=2ib$. It is symmetric and complex bilinear, and
>
> $$
> 2ig=H+\psi,\qquad
> H(x,y)=ig(x,y)-g(ix,y),\qquad
> \psi(x,y)=ig(x,y)+g(ix,y).
> $$
>
> For uniqueness, the difference between two decompositions is simultaneously complex-linear and conjugate-linear in the first variable. Evaluating at $ix$ makes it both $i$ and $-i$ times its value at $x$, so it is zero. Thus $H$ and $\psi$ are unique.
>
> Finally, put $h(x,y)=H(y,x)$. This $h$ is Hermitian with Lang's first-variable-linear convention, and the equivalent corrected identity is $2ig(x,y)=h(y,x)+\psi(x,y)$, again with uniqueness.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|Restriction of scalars and vector spaces]]

## Notes

- **Source and proof status:** Both parts and the page continuation were checked at [S2, Ch. XV, Ex. 1, printed pp. 595–596, PDF pp. 610–611]. The conflicting first-variable convention was checked at [S2, Ch. XV, §5, printed p. 579, PDF p. 594]. The counterexample, corrected statement, and decomposition proof are independent derivations, not an authorial erratum.
- **Notation boundary:** The $g$ and $f$ of (a) are real valued; in (b), $g$ is complex valued and $f=g-g^{\mathsf T}$ is real valued. The two parts reuse letters for different data.
- **Proof inputs:** Only real and complex bilinearity, conjugation, and division by $2$ are used. No positivity or nondegeneracy is required.
