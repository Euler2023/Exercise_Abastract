---
title: "Exercise LA581: Three Eigenforms in a Four Dimensional Oldspace"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 5, §5.8, Exercise 5.8.3(a)–(d), printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-3"
created: 2026-10-23
---

# Exercise LA581: Three Eigenforms in a Four Dimensional Oldspace

## Problem Statement

> [!question] Original Exercise 5.8.3
> **Complete original Exercise 5.8.3:** Let $f_0\in S_2(\Gamma_0(11))$ be the unique normalized eigenform, cf. Exercise 3.5.4.
>
> (a) Compute that $a_2(f_0)=-2$.
>
> (b) Define $f_1(\tau)=f_0(2\tau)$, $f_2(\tau)=f_0(4\tau)$, and $f_3(\tau)=f_0(8\tau)$. Show that the set $\beta=\{f_0,f_1,f_2,f_3\}$ is linearly independent in $S_2(\Gamma_0(88))$.
>
> (c) Let $V=\operatorname{span}(\beta)$. Show that $V$ is stable under the Hecke operators, computing the matrix $[T_p]_\beta$ describing the action of $T_p$ on $V$ with respect to $\beta$ for each prime $p$. (A hint for this exercise is at the end of the book.)
>
> (d) Show that there are exactly three normalized eigenforms in $V$. Thus this problem exhibits a space without a basis of eigenforms.
>
> Matrices use the ordered basis $(f_0,f_1,f_2,f_3)$ and the column-vector convention. The referenced Exercise 3.5.4 is on printed p. 89 / PDF p. 103; its complete archive entry is [[07 - Modular Forms/Exercises/Exercise MF9 - Modularity and Elliptic Curves|MF9]].

## Hints

> [!hint]- Hint 1 — first nonzero powers
> Use $f_0=\eta(\tau)^2\eta(11\tau)^2=q\prod_{n\ge1}(1-q^n)^2(1-q^{11n})^2$. The four oldforms begin with $q,q^2,q^4,q^8$, respectively, so a linear relation can be resolved coefficient by coefficient in that order.

> [!hint]- Hint 2 — compare level 11 with level 88
> The appendix hint compares formula (5.4) for $\chi=1_{11}$ and $\chi=1_{88}$. These characters agree at odd primes. At $p=2$, the level-$11$ formula has a second term, whereas the level-$88$ formula consists only of the $U_2$ term.

> [!hint]- Hint 3 — the exceptional matrix
> Use $T_2f_0=-2f_0$ at level $11$ to obtain $T_2f_0=-2f_0-2f_1$ at level $88$. The other three columns follow from $T_2f_j=f_{j-1}$. Find the eigenspaces of this four-by-four matrix, then normalize the coefficient of $q$ to $1$.

## Solution

> [!success]- Independent solution
> This is an independent derivation. The modular-form inputs are the following identity from Exercise 3.5.4:
> $$
> f_0=\eta(\tau)^2\eta(11\tau)^2
> =q\prod_{n\ge1}(1-q^n)^2(1-q^{11n})^2
> $$
> and $\dim S_2(\Gamma_0(11))=1$ (printed p. 89 / PDF p. 103; see the full proof in [[07 - Modular Forms/Exercises/Exercise MF9 - Modularity and Elliptic Curves|MF9]]), the Fourier coefficient formula in Proposition 5.2.2(b) (printed pp. 171–172 / PDF pp. 185–186), and the level-raising maps in §5.6 (printed p. 188 / PDF p. 202). The appendix hint is on printed p. 423 / PDF p. 434.
>
> **(a) The initial coefficients.** The coefficient of $q^2$ in the product comes only from the outer factor $q$ and the linear term of $(1-q)^2$. The remaining factors contribute no linear term at this precision. Therefore
> $$
> f_0=q(1-2q+O(q^2))=q-2q^2+O(q^3),
> $$
> Hence $a_1(f_0)=1$ and $a_2(f_0)=-2$. Write $a_n=a_n(f_0)$ and set $a_x=0$ when the subscript is not a positive integer.
>
> **(b) Raising the level and linear independence.** For $d=1,2,4,8$, the form $f_0(d\tau)$ has level $11d$, and $11d\mid88$. The level-raising result in §5.6 places it in $S_2(\Gamma_0(88))$. Its transformation law can also be checked directly: if $\gamma=\begin{pmatrix}a&b\\c&e\end{pmatrix}\in\Gamma_0(11d)$, then
> $$
> \begin{pmatrix}d&0\\0&1\end{pmatrix}\gamma
> \begin{pmatrix}d&0\\0&1\end{pmatrix}^{-1}
> =\begin{pmatrix}a&db\\c/d&e\end{pmatrix}\in\Gamma_0(11).
> $$
> Vanishing at every cusp is part of the cited level-raising result; the argument does not infer it merely from vanishing at the cusp at infinity.
>
> We also have $f_j=q^{2^j}+O(q^{2^{j+1}})$. Suppose $c_0f_0+c_1f_1+c_2f_2+c_3f_3=0$. Compare the coefficients of $q,q^2,q^4,q^8$ in order, using the coefficients already shown to vanish. This gives $c_0=c_1=c_2=c_3=0$. Thus $\beta$ is linearly independent and $\dim V=4$.
>
> **(c) Matrices for every prime.** Distinguish the two levels by writing $T_p^{(11)}$ and $T_p^{(88)}$. The original cusp space is one-dimensional, and $f_0$ is normalized, so
> $$
> T_p^{(11)}f_0=a_pf_0
> $$
> for every prime $p$, with the eigenvalue identified by comparing the coefficient of $q$. At level $L$, the weight-two formula for trivial character is
> $$
> a_n(T_p^{(L)}g)=a_{pn}(g)+1_L(p)p\,a_{n/p}(g).
> $$
>
> First let $p$ be odd. Then $1_{11}(p)=1_{88}(p)$, including their common value $0$ at $p=11$. Since $p\nmid2^j$, we have $2^j\mid pn$ if and only if $2^j\mid n$. If $2^j\mid n$, set $m=n/2^j$ and compute coefficientwise:
> $$
> \begin{aligned}
> a_n(T_p^{(88)}f_j)
> &=a_{pm}+1_{88}(p)p\,a_{m/p}\\
> &=a_m(T_p^{(11)}f_0)=a_pa_m=a_pa_n(f_j).
> \end{aligned}
> $$
> If $2^j\nmid n$, all corresponding coefficients vanish. The constant terms vanish as well. Thus, for every odd prime $p$,
> $$
> [T_p^{(88)}]_\beta=a_pI_4.
> $$
> This includes the bad prime $11$. To make its matrix explicit, the product has the finite expansion
> $$
> f_0=q-2q^2-q^3+2q^4+q^5+2q^6-2q^7-2q^9-2q^{10}+q^{11}+O(q^{12}),
> $$
> Hence $a_{11}=1$ and $[T_{11}^{(88)}]_\beta=I_4$. This expansion follows directly from $q\prod_{r=1}^{10}(1-q^r)^2\bmod q^{12}$, because the omitted product factors first affect $f_0$ at degree $12$.
>
> Now take $p=2$. At level $88$, $1_{88}(2)=0$, so $T_2^{(88)}$ selects the even-indexed coefficients; denote it by $U_2$. The level-$11$ formula has an additional term:
> $$
> -2f_0=T_2^{(11)}f_0=U_2f_0+2f_0(2\tau).
> $$
> Thus $U_2f_0=-2f_0-2f_1$. For $j=1,2,3$, the definition gives coefficientwise
> $$
> U_2f_j=\sum_{n\ge1}a_nq^{2^{j-1}n}=f_{j-1}.
> $$
> Therefore, with the column-vector convention,
> $$
> [T_2^{(88)}]_\beta=A=
> \begin{pmatrix}
> -2&1&0&0\\
> -2&0&1&0\\
> 0&0&0&1\\
> 0&0&0&0
> \end{pmatrix}.
> $$
> Every prime-indexed operator preserves $V$. On $S_2(\Gamma_0(88))$, we have $\langle n\rangle=1_{88}(n)I$. The prime-power recurrence and coprime multiplication relations of §5.3 generate every $T_n$, so all Hecke operators preserve $V$.
>
> **(d) Exactly three normalized eigenforms.** Every odd-prime operator and every diamond operator acts as a scalar on $V$. Thus the common eigenvectors for all the Hecke operators on $V$ are precisely the eigenvectors of $A$. The block structure gives
> $$
> \det(xI-A)=x^2(x^2+2x+2),
> $$
> so the only possible eigenvalues are $0,-1+i,-1-i$.
>
> Write a vector as $c_0f_0+c_1f_1+c_2f_2+c_3f_3$. For eigenvalue $0$, the rows of $Ac=0$ give
> $$
> c_1=2c_0,\qquad c_2=2c_0,\qquad c_3=0.
> $$
> This eigenspace is one-dimensional, with normalized eigenform
> $$
> g_0=f_0+2f_1+2f_2.
> $$
> For $\lambda\ne0$, the last two rows give $c_3=c_2=0$, and the first row gives $c_1=(\lambda+2)c_0$. The second row is then equivalent to $\lambda^2+2\lambda+2=0$. The other two one-dimensional eigenspaces therefore have normalized eigenforms
> $$
> g_+=f_0+(1+i)f_1,\qquad
> g_-=f_0+(1-i)f_1.
> $$
> Every nonzero eigenvector has $c_0\ne0$, and its coefficient of $q^1$ is exactly $c_0$. Each eigenline therefore has a unique normalized form. The three forms above are common eigenforms for $T_2$, every odd-prime $T_p$, and all diamond operators, and hence for every $T_n$. There is no fourth eigenline, so there are exactly three normalized eigenforms.
>
> The direct sum of the three one-dimensional eigenspaces has dimension $3<4=\dim V$, so $V$ has no basis of Hecke eigenforms. Equivalently, $0$ has algebraic multiplicity $2$ for $A$, but its eigenspace is one-dimensional; thus $A$ is not diagonalizable.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Independence|Linear Independence]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Eta Function|Eta Function]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]
- [[07 - Modular Forms/Exercises/Exercise MF9 - Modularity and Elliptic Curves|Exercise MF9 - Modularity and Elliptic Curves]]
- [[07 - Modular Forms/Exercises/Exercise MF5 - Hecke Operators|Exercise MF5 - Hecke Operators]]

## Notes

- Routing rationale: after the Fourier coefficient formula and level-raising input are specified, the main work consists of linear independence from leading terms, a four-by-four matrix calculation, and classification of its eigenspaces. The note therefore belongs in Linear Algebra and Modules, with links to the modular-form prerequisites.
- Distinguish $T_2^{(11)}$ from $T_2^{(88)}$. The former has the additional term $2f(2\tau)$; the latter selects even-indexed coefficients because $2\mid88$. Confusing the operators at these two levels gives an incorrect matrix.
- Commutativity of Hecke operators does not ensure a common eigenbasis when operators at primes dividing the level are included. The normality and eigenbasis results involving the Petersson inner product have restrictions, such as staying away from the level. The bad prime $2$ here gives a concrete counterexample to an unrestricted eigenbasis claim; it does not contradict newform theory or the results away from the level.
- Finite computational check: independently truncating $\prod_{r=1}^{10}(1-q^r)^2$ at $q^{10}$ gave coefficients $(1,-2,-1,2,1,2,-2,0,-2,-2,1)$, checking $a_2=-2$ and $a_{11}=1$. Direct substitution into the four-by-four matrix also checked the three stated eigenvectors. These computations are checks; the proof above establishes the matrices for all primes and the exact number of normalized eigenforms.
- Source/proof status: the complete exercise, appendix hint, coefficient formula, and level-raising input were checked against rendered source pages. The solution is independently derived. No source correction to the exercise statement was found.

- **Independent finite verification:** exact integer eta-product expansions checked 1,792 operator-matrix coefficient identities for $p=2,3,5,7,11,13,17$, the four basis vectors, and their first 64 positive-degree coefficients. The characteristic polynomial, the dimension of the zero eigenspace, and the three eigenvectors were also checked directly. These finite checks supplement the proof for all primes and all indices.

- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]]. This note counts only as original Exercise 5.8.3.
