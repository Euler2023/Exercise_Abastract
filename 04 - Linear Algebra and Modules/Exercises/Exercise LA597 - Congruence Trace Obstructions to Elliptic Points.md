---
title: "Exercise LA597: Congruence Trace Obstructions to Elliptic Points"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.7, printed p. 56, PDF p. 71; Appendix A hint, printed p. 415, PDF p. 426"
source_refs:
  - "S7/ch-2/sec-3/ex-7"
created: 2026-10-28
---

# Exercise LA597: Congruence Trace Obstructions to Elliptic Points

## Problem Statement

> [!question] Original Exercise 2.3.7
> Prove that there are no elliptic points for the following groups:
>
> (a) $\Gamma(N)$ for $N>1$,
>
> (b) $\Gamma_1(N)$ for $N>3$ (also, find the elliptic points for $\Gamma_1(2)$ and $\Gamma_1(3)$ given that each group has one),
>
> (c) $\Gamma_0(N)$ for $N$ divisible by any prime $p\equiv-1\pmod{12}$. (A hint for this exercise is at the end of the book.) In the next chapter we will extend the technique of proving Proposition 2.3.3 to count the elliptic points of $\Gamma_0(N)$ for all $N$.
>
> Also, show that if the congruence subgroup $\Gamma$ does not contain the negative identity matrix $-I$ then $\Gamma$ has no elliptic points of period $2$.
>
> **Definitions and conventions.** The groups act on $\mathcal H=\{z:\operatorname{Im}z>0\}$ by fractional linear transformations, and
> $$
> \begin{aligned}
> \Gamma(N)&=\left\{\gamma\in SL_2(\mathbb Z):\gamma\equiv I\pmod N\right\},\\
> \Gamma_1(N)&=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):
> a\equiv d\equiv1,\ c\equiv0\pmod N\right\},\\
> \Gamma_0(N)&=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):
> c\equiv0\pmod N\right\}.
> \end{aligned}
> $$
> A point $\tau\in\mathcal H$ is elliptic when its stabilizer $\Gamma_\tau$ contains a matrix outside $\{\pm I\}$. Its period is the order of the effective stabilizer $\Gamma_\tau/(\Gamma\cap\{\pm I\})$. An elliptic point of the quotient $Y(\Gamma)=\Gamma\backslash\mathcal H$ is a $\Gamma$-orbit of such points; the uniqueness in (b) is given for this quotient.

## Hints

> [!hint]- Hint 1
> A nonidentity fractional linear transformation in $SL_2(\mathbb Z)$ fixing a point of $\mathcal H$ has trace $-1,0$, or $1$. Prove this from its fixed-point quadratic equation.

> [!hint]- Hint 2
> For (a), the congruence $\operatorname{tr}\gamma\equiv2\pmod N$ alone leaves small levels unresolved. Write $\gamma=I+NA$ and expand its determinant to obtain the stronger congruence modulo $N^2$.

> [!hint]- Hint 3
> For the exceptional levels in (b), test $\begin{pmatrix}1&-1\\2&-1\end{pmatrix}$ and $\begin{pmatrix}1&-1\\3&-2\end{pmatrix}$. Solve their fixed-point equations in the upper half-plane.

> [!hint]- Hint 4
> For (c), reduce to $\Gamma_0(p)$. The conditions $ad\equiv1$ and $a+d\in\{-1,0,1\}$ would produce an element of order $4$ or $3$ in $\mathbb F_p^\times$. Compare these orders with $p-1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation, including the small levels. The uniqueness of the two quotient elliptic points in (b) is supplied by the problem. The finite-group input in (c) is Lagrange's theorem.
>
> **A fixed-point trace bound.** Let $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ fix $\tau\in\mathcal H$ and induce a nonidentity transformation. If $c=0$, the equation $(d-a)\tau=b$ and the nonzero imaginary part give $a=d,b=0$; determinant $1$ then gives $\gamma=\pm I$, a contradiction. Thus $c\ne0$, and
> $$
> c\tau^2+(d-a)\tau-b=0.
> $$
> This real quadratic has a nonreal root, so its discriminant is negative:
> $$
> (d-a)^2+4bc
> =(a+d)^2-4(ad-bc)
> =(\operatorname{tr}\gamma)^2-4<0.
> $$
> Since the trace is an integer,
> $$
> \operatorname{tr}\gamma\in\{-1,0,1\}. \tag{1}
> $$
>
> **(a) Principal congruence subgroups.** If $\gamma\in\Gamma(N)$, write $\gamma=I+NA$ with $A\in M_2(\mathbb Z)$. Expanding a two-by-two determinant gives
> $$
> 1=\det(I+NA)=1+N\operatorname{tr}A+N^2\det A.
> $$
> Therefore
> $$
> \operatorname{tr}A=-N\det A,\qquad
> \operatorname{tr}\gamma=2-N^2\det A\equiv2\pmod{N^2}.
> $$
> If (1) held, $N^2$ would divide one of $-3,-2,-1$. When $N>1$, we have $N^2\ge4$, so this is impossible. Thus $\Gamma(N)$ has no elliptic points. This includes $N=2$ and $N=3$ without an additional exception.
>
> **(b1) Levels $N>3$.** A matrix in $\Gamma_1(N)$ has $a+d\equiv2\pmod N$. If $N>3$, none of $-1,0,1$ is congruent to $2$ modulo $N$, again contradicting (1).
>
> **(b2) The point for $\Gamma_1(2)$.** Put
> $$
> \gamma_2=\begin{pmatrix}1&-1\\2&-1\end{pmatrix}\in\Gamma_1(2).
> $$
> Its determinant is $-1+2=1$ and $\gamma_2^2=-I$. Its fixed-point equation is
> $$
> 2\tau^2-2\tau+1=0,
> $$
> whose upper-half-plane root is
> $$
> \tau_2=\frac{1+i}{2}.
> $$
> To verify its full stabilizer explicitly, suppose $\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z)$ fixes $\tau_2$. Comparing the real quadratic fixed-point equation with $2\tau^2-2\tau+1=0$ gives
> $$
> c=2k,\qquad b=-k,\qquad d=a-2k,\qquad
> 1=ad-bc=(a-k)^2+k^2.
> $$
> The four integer possibilities are $(a-k,k)=(1,0),(-1,0),(0,1),(0,-1)$. They give $I,-I,\gamma_2,-\gamma_2$, all in $\Gamma_1(2)$. Thus
> $$
> \Gamma_1(2)_{\tau_2}=\langle\gamma_2\rangle
> $$
> has matrix order $4$ and effective order $2$. Given the uniqueness stipulated in the problem, all elliptic points upstairs form the single orbit $\Gamma_1(2)\tau_2$.
>
> **(b3) The point for $\Gamma_1(3)$.** Put
> $$
> \gamma_3=\begin{pmatrix}1&-1\\3&-2\end{pmatrix}\in\Gamma_1(3).
> $$
> Its determinant is $-2+3=1$, and direct multiplication gives
> $$
> \gamma_3^2=\begin{pmatrix}-2&1\\-3&1\end{pmatrix},
> \qquad
> \gamma_3^2+\gamma_3+I=0.
> $$
> Hence $\gamma_3$ has exact order $3$. The fixed-point equation
> $$
> 3\tau^2-3\tau+1=0
> $$
> has upper-half-plane root
> $$
> \tau_3=\frac{3+i\sqrt3}{6}.
> $$
> For an arbitrary integral determinant-one matrix fixing this point, the same comparison of quadratic coefficients gives
> $$
> c=3k,\qquad b=-k,\qquad d=a-3k,
> $$
> $$
> 1=a^2-3ak+3k^2
> =\left(a-\frac32k\right)^2+\frac34k^2.
> $$
> Therefore $k=-1,0,1$. If $k=0$, then $a=\pm1$; if $k=1$, then $a=1,2$; if $k=-1$, then $a=-1,-2$. The additional condition $a\equiv d\equiv1\pmod3$ keeps precisely
> $$
> (a,k)=(1,0),(1,1),(-2,-1).
> $$
> These are $I,\gamma_3,\gamma_3^2$. Consequently
> $$
> \Gamma_1(3)_{\tau_3}=\langle\gamma_3\rangle
> $$
> has order $3$. Since $-I\notin\Gamma_1(3)$, its effective order is also $3$. Given the problem's uniqueness assertion, all elliptic points upstairs form $\Gamma_1(3)\tau_3$.
>
> **(c) A prime obstruction for $\Gamma_0(N)$.** Let $p\mid N$ and $p\equiv11\pmod{12}$. Then $\Gamma_0(N)\subset\Gamma_0(p)$, so it suffices to exclude elliptic points for $\Gamma_0(p)$. Suppose that $\gamma$ were a nontrivial fixing transformation in this larger group. Modulo $p$ its entries satisfy
> $$
> ad=1,\qquad a+d=t,\qquad t\in\{-1,0,1\}.
> $$
> If $t=0$, then $d=-a$ and $a^2=-1$ in $\mathbb F_p$. Since $p$ is odd, $-1\ne1$; hence $a$ has exact multiplicative order $4$. Lagrange's theorem would give $4\mid p-1$, whereas $p\equiv3\pmod4$.
>
> If $t=-1$, then $d=-1-a$, so $a^2+a+1=0$. Thus $a^3=1$. The value $a=1$ would force $3=0$ in $\mathbb F_p$, impossible because $p\equiv11\pmod{12}$. Hence $a$ has exact order $3$. Lagrange's theorem contradicts $p\equiv2\pmod3$.
>
> If $t=1$, then $d=1-a$, so $a^2-a+1=0$. Taking $u=-a$ yields $u^2+u+1=0$. As in the preceding case, $u$ is a nontrivial element of order $3$, giving the same contradiction. All three traces are excluded.
>
> **The final assertion about period $2$.** Suppose $-I\notin\Gamma$ and an elliptic point had period $2$. Its effective stabilizer then equals its matrix stabilizer, because $\Gamma\cap\{\pm I\}=\{I\}$. There would be a matrix $\delta\in\Gamma$ of exact order $2$. The two-by-two characteristic identity gives
> $$
> (\operatorname{tr}\delta)\delta=2I
> $$
> as in the unique-involution argument. It forces $\delta=-I$, contradicting the hypothesis. Thus no such point exists.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange Theorem]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** All parts, including the small-level request, the chapter-transition sentence, and the final period-$2$ assertion, were checked on printed p. 56 / PDF p. 71. The appendix hint for (c), printed p. 415 / PDF p. 426, uses the same three trace cases and the congruence classes of $p$ modulo $4$ and $3$.
- **Proof status:** The argument and the explicit stabilizer computations are independent derivations. The count of one quotient elliptic point at each of levels $2$ and $3$ is given in the exercise and is used only to conclude that the exhibited orbit is the entire set.
- **Small-level boundary:** In (a), reducing the trace only modulo $N$ fails to eliminate $N=2,3$. The determinant identity strengthens the modulus to $N^2$. In (b), those two levels really are exceptional and have the displayed points.
- **Notation boundary:** The period is the order of the effective stabilizer, not the order of an arbitrary fixing matrix. At $\tau_2$ the generating matrix has order $4$, while the point has period $2$.
- **Routing:** Congruences for the trace and determinant, fixed-point quadratics, and explicit matrix powers are the principal tools; finite-field group orders are a cross-topic input.
- **Learning status:** The status remains not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
