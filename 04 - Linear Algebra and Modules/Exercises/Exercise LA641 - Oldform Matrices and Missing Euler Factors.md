---
title: "Exercise LA641: Oldform Matrices and Missing Euler Factors"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.9, Exercise 5.9.5, printed p. 208, PDF p. 222"
source_refs:
  - "S7/ch-5/sec-9/ex-5"
created: 2026-10-28
---

# Exercise LA641: Oldform Matrices and Missing Euler Factors

## Problem Statement

> [!question] Original Exercise 5.9.5
> (a) Generalize the argument in the section that $f_{p^{-1}}=a_p(f)f-\chi_M(p)p^{k-1}f_p$ for $p\nmid N/M$ to show that $f_{mp^{-1}}=a_p(f)f_m-\chi_M(p)p^{k-1}f_{mp}$ where $f_{mp^{-1}}$ is defined similarly to $f_{p^{-1}}$. (Note that the work will take place at level $dM$ and so it will involve the corresponding character $\chi_{dM}$. Note also that the coefficients of $f_m$ and $f_{mp}$ on the right side of the equality to be shown are independent of $m$.)
>
> (b) Prove casewise that the displayed relation $a_n(T_pf_d)=a_{np}(f_d)=a_{np/d}(f)$ in the section says when $p\nmid d$ that $a_n(T_pf_d)=a_{n/d}(T_pf)$ regardless of whether $n$ is a multiple of $d$.
>
> (c) Recall the functions $f$, $f_1$, $f_2$, and $f_3$ from Exercise 5.8.3. The exercise showed that the $4$-dimensional space spanned by these functions contains only three normalized eigenforms. How do the $L$-functions of the three eigenforms relate to $L(s,f)$?
>
> (d) Let $N=np^eM$ with $p$ prime and $e\ge1$ and $p\nmid n$. The normalized Hecke eigenform $g$ lies in the subspace of $S_k(\Gamma_1(N))$ having basis $\bigcup_{m\mid n}\{f_m,f_{mp},\ldots,f_{mp^e}\}$. Show that the matrix of $T_p$ on this space with respect to this basis is a direct sum of copies of the matrix $A$ in the section, taken over the divisors of $n$.
>
> The context defines $f_d(\tau)=f(d\tau)$ for a newform $f$ of level $M$ and character $\chi_M$, and $a_n(f_{p^{-1}})=a_{np}(f)$. Nonpositive or nonintegral Fourier indices mean zero.

> [!warning] Source issue and corrected scope
> Part (a) must retain the surrounding condition $p\nmid m$ and, for its level-$N$ application, $pm\mid N/M$. The source's notation $dM$ in that part refers to the shifted level $mM$. In the surrounding conclusion on printed p.206/PDF p.220, the local factor for eigenvalue $a_p(f)$ is printed with a plus sign; it must be $(1-a_p(f)X)^{-1}$. The original wording above is preserved and the level-dependent operators are distinguished in the proof.

## Hints

> [!hint]- Hint 1
> Keep the operators at level $M$ and level $N$ distinct; at the latter level $p\mid N$ the operator is $U_p$.

> [!hint]- Hint 2
> Put $a=a_p(f)$ and $b=\chi_M(p)p^{k-1}$. On each block, $T_pf_m=af_m-bf_{mp}$ and $T_pf_{mp^j}=f_{mp^{j-1}}$ for $j\ge1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a), notation and corrected scope.** The intended degeneracy calculation assumes $pm\mid N/M$ and $p\nmid m$; the printed $p\nmid N/M$ refers to the earlier level-$M$ coefficient identity, which itself holds for every prime. Define $a_n(f_{mp^{-1}})=a_{np}(f_m)=a_{np/m}(f)$. Since $p\nmid m$, the newform coefficient relation $a_{pr}(f)=a_p(f)a_r(f)-\chi_M(p)p^{k-1}a_{r/p}(f)$, including the zero-index convention, gives
> $$
> a_n(f_{mp^{-1}})=a_p(f)a_{n/m}(f)-\chi_M(p)p^{k-1}a_{n/(mp)}(f).
> $$
> This is the desired identity after recognizing the two shifted forms. To phrase it at level $mM$, $T_p$ commutes with the shift by $m$ because $p\nmid m$. The lifted character satisfies $\chi_{mM}(p)=\chi_M(p)$: either both are the same unit value, or $p\mid M$ and both vanish. Thus the scalars are independent of $m$.
>
> If $p\mid m$, the assertion would instead fail in general: the coefficient operator $U_p$ simply lowers the degeneracy index, so $f_{mp^{-1}}=f_{m/p}$. The surrounding text explicitly assumes $p\nmid m$.
>
> **(b).** All $T_p$ in this paragraph are at level $N$, where $p\mid N$. If $d\mid n$, put $r=n/d$. Then $a_{np/d}(f)=a_{rp}(f)=a_r(T_{p,N}f)$ because $T_{p,N}=U_p$. If $d\nmid n$, the condition $p\nmid d$ implies $d\nmid np$, so both $a_{np/d}(f)$ and the conventionally zero $a_{n/d}(T_{p,N}f)$ vanish. This proves the identity in both cases. Replacing $T_{p,N}f$ by $T_{p,M}f$ would be incorrect when $p\nmid M$.
>
> **(c).** Here $M=11$, $p=2$, $k=2$, $a_2(f)=-2$, and $\chi_M(2)2=2$. On the ordered basis $(f,f_1,f_2,f_3)$ the matrix is
> $$
> A=\begin{pmatrix}-2&1&0&0\\-2&0&1&0\\0&0&0&1\\0&0&0&0\end{pmatrix}.
> $$
> Its distinct eigenvalues are $0$ and $\lambda_\pm=-1\pm i$. The corresponding normalized vectors are
> $$
> g_0=f+2f_1+2f_2,\qquad g_\lambda=f+(\lambda+2)f_1\quad(\lambda=\lambda_\pm).
> $$
> Multiplying the matrix verifies each equation; the $\lambda$ vectors use $\lambda^2+2\lambda+2=0$. Since $L(s,f_j)=2^{-js}L(s,f)$,
> $$
> L(s,g_0)=(1+2\cdot2^{-s}+2\cdot2^{-2s})L(s,f),\qquad L(s,g_\lambda)=(1+(\lambda+2)2^{-s})L(s,f).
> $$
> The original local factor is $(1+2X+2X^2)^{-1}$ with $X=2^{-s}$. The first eigenform removes that factor entirely. For $\lambda=\lambda_+$ the numerator is $1-\lambda_-X$, and conversely, so the new local factor is $(1-\lambda X)^{-1}$. Every other Euler factor is unchanged. These formulas fully specify the three $L$-functions.
>
> **(d).** For $m\mid n$ we have $p\nmid m$. At level $N$ parts (a),(b) give
> $$
> T_pf_m=a_pf_m-bf_{mp},\qquad T_pf_{mp^j}=f_{mp^{j-1}}\quad(1\le j\le e),\quad b=\chi_M(p)p^{k-1}.
> $$
> Thus each ordered block $(f_m,f_{mp},\ldots,f_{mp^e})$ is stable and has matrix $A$, whose first column is $(a_p,-b,0,\ldots,0)^t$, superdiagonal entries are $1$, and remaining entries are $0$. These scalars do not depend on $m$. The basis independence is supplied by Theorem 5.8.3 (with its stated Strong Multiplicity One input), so grouping its vectors by $m$ gives a direct sum of those matrices, one for each divisor of $n$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.9.5, printed p. 208 / PDF p. 222]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Checked context:** The definitions and matrix $A$ are on printed pp.205–206/PDF pp.219–220. Exercise 5.8.3 supplies $a_2(f)=-2$; the matrix and all three eigenvectors are directly verified above, rather than relying only on that previous answer.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
