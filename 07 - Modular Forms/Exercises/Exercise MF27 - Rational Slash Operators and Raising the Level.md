---
title: "Exercise MF27: Rational Slash Operators and Raising the Level"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.11, printed p. 24, PDF p. 39; Lemma 1.2.2, printed p. 14, PDF p. 29; Appendix A hint, printed p. 414, PDF p. 425"
source_refs:
  - "S7/ch-1/sec-2/ex-11"
created: 2026-10-24
---

# Exercise MF27: Rational Slash Operators and Raising the Level

## Problem Statement

> [!question] Original Exercise 1.2.11
> Let $GL_2^+(\mathbb Q)$ be the group of $2$-by-$2$ matrices with positive determinant and rational entries. The elements of this group act as fractional linear transformations on the upper half plane since $\operatorname{Im}(\gamma\tau)=\det\gamma\cdot\operatorname{Im}\tau/|c\tau+d|^2$ for $\gamma\in GL_2^+(\mathbb Q)$. Let $k$ be a positive integer. For $\tau\in\mathcal H$, extend the formula $j(\gamma,\tau)=c\tau+d$ to $\gamma\in GL_2^+(\mathbb Q)$, and extend the weight-$k$ operator to $GL_2^+(\mathbb Q)$ by the rule
> $$
> (f[\gamma]_k)(\tau)=(\det\gamma)^{k-1}j(\gamma,\tau)^{-k}f(\gamma\tau)
> \quad\text{for }f:\mathcal H\to\mathbb C.
> $$
>
> (a) Show that $[\gamma\gamma']_k=[\gamma]_k[\gamma']_k$ for all $\gamma,\gamma'\in GL_2^+(\mathbb Q)$, generalizing Lemma 1.2.2(b).
>
> (b) Show that every $\gamma\in GL_2^+(\mathbb Q)$ satisfies $\gamma=\alpha\gamma'$ where $\alpha\in SL_2(\mathbb Z)$ and $\gamma'=r\begin{pmatrix}a&b\\0&d\end{pmatrix}$ with $r\in\mathbb Q^+$ and $a,b,d\in\mathbb Z$ relatively prime. Use this to show that given $f\in M_k(\Gamma)$ for some congruence subgroup $\Gamma$ and given such $\gamma=\alpha\gamma'$, since $f[\alpha]_k$ has a Fourier expansion so does $f[\gamma]_k$. Show that if the Fourier expansion for $f[\alpha]_k$ has constant term $0$ then so does the Fourier expansion for $f[\gamma]_k$. (A hint for this exercise is at the end of the book.)
>
> (c) Suppose that $\Gamma_1$ and $\Gamma_2$ are congruence subgroups of $SL_2(\mathbb Z)$ and suppose that $\Gamma_1\supset\gamma\Gamma_2\gamma^{-1}$ for some $\gamma\in GL_2^+(\mathbb Q)$. Prove that if $f\in M_k(\Gamma_1)$ then $f[\gamma]_k\in M_k(\Gamma_2)$. Show that the same result holds for cusp forms.
>
> (d) Let $N,d$ be positive integers. Suppose $f\in M_k(\Gamma_0(N))$. Show that if $g(\tau)=f(d\tau)$ then $g\in M_k(\Gamma_0(dN))$, and the same result holds for cusp forms. Show that if $f\in M_k(\Gamma_1(N))$ then $g\in M_k(\Gamma_1(dN))$, and the same result holds for cusp forms.

> [!warning] Source issue
> The source's part (a) refers to Lemma 1.2.2(b), but the slash-composition identity is Lemma 1.2.2(c) (printed p. 14 / PDF p. 29); part (b) of that lemma is composition of fractional linear maps. In addition, the Appendix A hint for (b) says that a left multiplier with **top row** $(c',-a')$ clears the **lower-left** entry. That row instead clears an upper-left entry. For upper triangularization one needs **bottom row** $(-c',a')$, as used in the explicit matrix $U$ below. The printed exercise and its cross-reference are preserved above; neither typographical issue affects the intended result.

## Hints

> [!hint]- Hint 1
> The determinant is multiplicative, and the automorphy factor satisfies its cocycle identity for arbitrary invertible matrices.

> [!hint]- Hint 2
> After clearing rational denominators, use Bezout's identity on the first column to make the lower-left entry zero by a determinant-one row operation.

> [!hint]- Hint 3
> An upper triangular matrix substitutes $(a\tau+b)/d$ in a Fourier series. Choose $a,d>0$ to preserve nonnegative exponents.

> [!hint]- Hint 4
> Apply (c) to $D=\operatorname{diag}(d,1)$ and compute $D\Gamma_0(dN)D^{-1}$ or $D\Gamma_1(dN)D^{-1}$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a)** For any invertible real matrices inducing maps of $\mathcal H$, direct multiplication gives $j(\gamma\gamma',\tau)=j(\gamma,\gamma'\tau)j(\gamma',\tau)$. Combining this with determinant multiplicativity yields
> $$
> \begin{aligned}
> ((f[\gamma]_k)[\gamma']_k)(\tau)
> &=(\det\gamma\det\gamma')^{k-1}
>  j(\gamma',\tau)^{-k}j(\gamma,\gamma'\tau)^{-k}
>  f(\gamma\gamma'\tau)\\
> &=(f[\gamma\gamma']_k)(\tau).
> \end{aligned}
> $$
> This is a right action on functions in the stated order.
>
> **(b): triangular factorization.** Choose an integer $L>0$ so that $A=L\gamma$ has integral entries. Its first column $(A_1,C_1)^t$ is nonzero. Let $g=\gcd(A_1,C_1)>0$, and choose integers $x,y$ with $xA_1+yC_1=g$. Then
> $$
> U=\begin{pmatrix}x&y\\-C_1/g&A_1/g\end{pmatrix}\in SL_2(\mathbb Z),
> \qquad UA=\begin{pmatrix}g&B\\0&D\end{pmatrix},
> $$
> where $D=\det(A)/g>0$. Put $h=\gcd(g,B,D)>0$. Taking $\alpha=U^{-1}$ and
> $$
> r=h/L,\qquad a=g/h,\quad b=B/h,\quad d=D/h
> $$
> gives the requested factorization with $a,d>0$ and $\gcd(a,b,d)=1$.
>
> Write $F=f[\alpha]_k=\sum_{n\ge0}c_ne^{2\pi in\tau/H}$ for a positive integral cusp period $H$. Since $\gamma'\tau=(a\tau+b)/d$ and the slash prefactor is constant,
> $$
> (f[\gamma]_k)(\tau)
> =\frac{r^{k-2}a^{k-1}}d\sum_{n\ge0}c_ne^{2\pi inb/(dH)}e^{2\pi ina\tau/(dH)}.
> $$
> This is a power series in $e^{2\pi i\tau/(dH)}$ with integer exponents $an\ge0$. The constant coefficient is the displayed nonzero prefactor times $c_0$, so it vanishes when $c_0=0$. The period $dH$ is sufficient even if it is not minimal.
>
> **(c): invariance and cusp conditions.** Put $F=f[\gamma]_k$. The fractional linear map $\gamma:\mathcal H\to\mathcal H$ is holomorphic and its automorphy factor never vanishes on $\mathcal H$, so $F$ is holomorphic. If $\delta\in\Gamma_2$, then $\gamma\delta\gamma^{-1}\in\Gamma_1$ and (a) gives
> $$
> F[\delta]_k=f[\gamma\delta]_k
> =(f[\gamma\delta\gamma^{-1}]_k)[\gamma]_k
> =f[\gamma]_k=F.
> $$
> For any $\sigma\in SL_2(\mathbb Z)$, factor $\gamma\sigma=\alpha\beta$ as in (b). The function $f[\alpha]_k$ is holomorphic at $\infty$ by the defining cusp condition on $f$, and (b) shows the same for $F[\sigma]_k=f[\gamma\sigma]_k$. A Fourier period supplied by (b) and the period from $\Gamma_2$ describe the same holomorphic punctured-disk function; equivalently, the nonnegative-power series proves $F[\sigma]_k$ stays bounded as $\operatorname{Im}\tau\to\infty$, which is the removable-singularity criterion at the cusp. This proves $F\in M_k(\Gamma_2)$. If $f$ is a cusp form, the series has zero constant term at every $\alpha$, hence $F[\sigma]_k\to0$ at every cusp by (b). Thus $F\in S_k(\Gamma_2)$.
>
> **(d)** Take $D=\operatorname{diag}(d,1)$. For $\delta=\begin{pmatrix}a&b\\c&e\end{pmatrix}$,
> $$
> D\delta D^{-1}=\begin{pmatrix}a&db\\c/d&e\end{pmatrix}.
> $$
> If $\delta\in\Gamma_0(dN)$, this is integral with lower-left entry divisible by $N$, so $D\Gamma_0(dN)D^{-1}\subseteq\Gamma_0(N)$. If $\delta\in\Gamma_1(dN)$, its diagonal entries are also $1$ modulo $N$, giving the analogous containment in $\Gamma_1(N)$. Part (c) applies in both cases. Finally,
> $$
> f[D]_k=d^{k-1}f(d\tau)=d^{k-1}g(\tau),
> $$
> and dividing by the nonzero scalar proves all four assertions, including the cusp-form cases.
>
> For a concrete normalization check, a scalar matrix $rI$ acts as $f[rI]_k=r^{k-2}f$. Thus rational slash operators here use the source's determinant exponent $k-1$; replacing it by $k/2$ would change this check and the prefactors above.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

The original exercise, slash definition (printed p. 14 / PDF p. 29), and Appendix A hint (printed p. 414 / PDF p. 425) were visually checked. The factorization and cusp argument are independent derivations. Imported elementary inputs are Bezout's identity and the holomorphic removable-singularity criterion. The determinant exponent is exactly the source's $k-1$. The main task transports modular forms and their cusp conditions, determining the modular-forms routing despite the matrix factorization used in its proof.
